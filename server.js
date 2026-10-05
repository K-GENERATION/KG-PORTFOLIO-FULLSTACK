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

// ===== BLOG : jetons de session admin (en mémoire) =====
const sessions = new Set();

function requireAdmin(req, res, next) {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ success: false, error: 'Non autorisé.' });
  }
  next();
}

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, error: 'Mot de passe incorrect.' });
  }
  const token = crypto.randomBytes(32).toString('hex');
  sessions.add(token);
  res.json({ success: true, token });
});

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

// Route protégée pour consulter les messages reçus
app.get('/api/messages', (req, res) => {
  const motDePasse = req.query.password;
  const motDePasseAttendu = process.env.ADMIN_PASSWORD || 'change-moi';

  if (motDePasse !== motDePasseAttendu) {
    return res.status(401).json({ success: false, error: 'Accès refusé. Mot de passe requis.' });
  }

  const messagesPath = path.join(__dirname, 'messages.json');
  if (fs.existsSync(messagesPath)) {
    const data = fs.readFileSync(messagesPath, 'utf-8');
    res.json(JSON.parse(data));
  } else {
    res.json([]);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

initDb()
  .then(() => app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`)))
  .catch((err) => {
    console.error('Erreur base de données :', err);
    process.exit(1);
  });