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

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});