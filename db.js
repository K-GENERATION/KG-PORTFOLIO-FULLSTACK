import pg from 'pg';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('railway.internal')
    ? false
    : { rejectUnauthorized: false },
});

export async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      titre TEXT NOT NULL,
      categorie TEXT NOT NULL,
      image TEXT,
      resume TEXT NOT NULL,
      contenu TEXT NOT NULL,
      date TIMESTAMP DEFAULT NOW()
    )
  `);
}

export default pool;