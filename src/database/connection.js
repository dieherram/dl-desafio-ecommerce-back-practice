import pg from 'pg'
import 'dotenv/config'
const { Pool } = pg

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  allowExitOnIdle: true
})

const check = async () => {
  try {
    console.log('Connecting to database')
    const now = await pool.query('SELECT NOW()')
    console.log(now.rows[0].now)
    console.log('Database connected')
  } catch (error) {
    console.log(error)
  }
}
check()
