require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ── DB Connection ───────────────────────────────────────
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// ── Middleware ──────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ── Init DB Tables ──────────────────────────────────────
async function initDB() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS saved_content (
      id        SERIAL PRIMARY KEY,
      type      VARCHAR(20) NOT NULL,
      title     TEXT NOT NULL,
      content   TEXT NOT NULL,
      topic     TEXT,
      platform  VARCHAR(20),
      tone      VARCHAR(20),
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS generation_history (
      id        SERIAL PRIMARY KEY,
      topic     TEXT NOT NULL,
      platform  VARCHAR(20),
      tone      VARCHAR(20),
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);
  console.log('✅ Database tables ready');
}

// ── Routes ──────────────────────────────────────────────

// Save a content item
app.post('/api/save', async (req, res) => {
  const { type, title, content, topic, platform, tone } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO saved_content (type, title, content, topic, platform, tone)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [type, title, content, topic, platform, tone]
    );
    res.json({ success: true, item: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all saved content
app.get('/api/saved', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM saved_content ORDER BY created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a saved item
app.delete('/api/saved/:id', async (req, res) => {
  try {
    await pool.query(`DELETE FROM saved_content WHERE id = $1`, [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Log a generation event
app.post('/api/history', async (req, res) => {
  const { topic, platform, tone } = req.body;
  try {
    await pool.query(
      `INSERT INTO generation_history (topic, platform, tone) VALUES ($1, $2, $3)`,
      [topic, platform, tone]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get generation history
app.get('/api/history', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM generation_history ORDER BY created_at DESC LIMIT 50`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Start ───────────────────────────────────────────────
initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Tera Diet Content App running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ DB init failed:', err.message);
  process.exit(1);
});
