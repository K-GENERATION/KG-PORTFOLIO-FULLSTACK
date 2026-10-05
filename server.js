import crypto from 'crypto';
import pool, { initDb } from './db.js';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client', 'dist')));

// ===== CONTACT =====
app.post('/api/contact', (req, res) => {
  const { nom, email, sujet, message } = req.body;

  if (!nom || !email || !sujet || !message) {
    return res.status(400).json({ success: false, error: 'Tous les champs sont obligatoires.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Email invalide.' });
  }

  const now = new Date();
  const nouveauMessage = {
    nom,
    email,
    sujet,
    message,
    date: now.toLocaleDateString('fr-FR'),
    heure: now.toLocaleTimeString('fr-FR'),
  };

  const messagesPath = path.join(__dirname, 'messages.json');
  let messages = [];

  if (fs.existsSync(messagesPath)) {
    const data = fs.readFileSync(messagesPath, 'utf-8');
    messages = data ? JSON.parse(data) : [];
  }

  messages.push(nouveauMessage);
  fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2));

  res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
});

// ===== ADMIN : sessions en mémoire =====
const sessions = new Set();

function requireAdmin(req, res, next) {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ success: false, error: 'Non autorisé.' });
  }
  next();
}

// Comparaison à temps constant (évite de révéler la valeur par le temps de réponse)
function memeValeur(a = '', b = '') {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

// Limite simple d'essais de connexion : 5 échecs par IP / 15 min
const tentatives = new Map();
const MAX_ESSAIS = 5;
const FENETRE_MS = 15 * 60 * 1000;

function loginBloque(ip) {
  const t = tentatives.get(ip);
  if (!t) return false;
  if (Date.now() - t.debut > FENETRE_MS) {
    tentatives.delete(ip);
    return false;
  }
  return t.compte >= MAX_ESSAIS;
}

function noterEchec(ip) {
  const t = tentatives.get(ip);
  if (!t || Date.now() - t.debut > FENETRE_MS) {
    tentatives.set(ip, { compte: 1, debut: Date.now() });
  } else {
    t.compte += 1;
  }
}

app.post('/api/admin/login', (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.ip;

  if (loginBloque(ip)) {
    return res
      .status(429)
      .json({ success: false, error: 'Trop d’essais. Réessaie dans 15 minutes.' });
  }

  const { username, password } = req.body;

  // Si ADMIN_USER n'est pas défini, seul le mot de passe est vérifié
  const userOk = process.env.ADMIN_USER ? memeValeur(username, process.env.ADMIN_USER) : true;
  const passOk = process.env.ADMIN_PASSWORD
    ? memeValeur(password, process.env.ADMIN_PASSWORD)
    : false;

  if (!userOk || !passOk) {
    noterEchec(ip);
    return res.status(401).json({ success: false, error: 'Identifiants incorrects.' });
  }

  tentatives.delete(ip);
  const token = crypto.randomBytes(32).toString('hex');
  sessions.add(token);
  res.json({ success: true, token });
});

// ===== BLOG : articles =====
// Lecture publique
app.get('/api/posts', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, titre, categorie, image, resume, contenu, date FROM posts ORDER BY date DESC'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erreur serveur.' });
  }
});

// Création (admin)
app.post('/api/admin/posts', requireAdmin, async (req, res) => {
  const { titre, categorie, image, resume, contenu } = req.body;
  if (!titre || !categorie || !resume || !contenu) {
    return res.status(400).json({ success: false, error: 'Champs obligatoires manquants.' });
  }
  try {
    const { rows } = await pool.query(
      `INSERT INTO posts (titre, categorie, image, resume, contenu)
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [titre, categorie, image || null, resume, contenu]
    );
    res.json({ success: true, id: rows[0].id });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erreur serveur.' });
  }
});

// Suppression (admin)
app.delete('/api/admin/posts/:id', requireAdmin, async (req, res) => {
  try {
    await pool.query('DELETE FROM posts WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Erreur serveur.' });
  }
});

// ===== BLOG : images =====
// Upload (admin) : le corps de la requête est le fichier brut
app.post(
  '/api/admin/upload',
  requireAdmin,
  express.raw({ type: ['image/jpeg', 'image/png', 'image/webp'], limit: '3mb' }),
  async (req, res) => {
    const mime = req.headers['content-type'];
    if (!Buffer.isBuffer(req.body) || req.body.length === 0) {
      return res.status(400).json({ success: false, error: 'Image invalide.' });
    }
    try {
      const { rows } = await pool.query(
        'INSERT INTO images (mime, data) VALUES ($1, $2) RETURNING id',
        [mime, req.body]
      );
      res.json({ success: true, url: `/api/images/${rows[0].id}` });
    } catch (err) {
      res.status(500).json({ success: false, error: 'Erreur serveur.' });
    }
  }
);

// Lecture publique d'une image
app.get('/api/images/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(404).end();
  try {
    const { rows } = await pool.query('SELECT mime, data FROM images WHERE id = $1', [id]);
    if (rows.length === 0) return res.status(404).end();
    res.set('Content-Type', rows[0].mime);
    res.set('Cache-Control', 'public, max-age=31536000, immutable');
    res.send(rows[0].data);
  } catch (err) {
    res.status(500).end();
  }
});

// ===== MESSAGES DE CONTACT (admin) =====
// Utilise maintenant le jeton (en-tête Authorization), plus de mot de passe dans l'URL
app.get('/api/admin/messages', requireAdmin, (req, res) => {
  const messagesPath = path.join(__dirname, 'messages.json');
  if (fs.existsSync(messagesPath)) {
    const data = fs.readFileSync(messagesPath, 'utf-8');
    res.json(data ? JSON.parse(data) : []);
  } else {
    res.json([]);
  }
});

// ===== CATCH-ALL : toujours en dernier =====
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

initDb()
  .then(() => app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`)))
  .catch((err) => {
    console.error('Erreur base de données :', err);
    process.exit(1);
  });