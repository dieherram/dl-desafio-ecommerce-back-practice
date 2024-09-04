import { pool } from '../database/connection.js'
import { getDatabaseError } from '../lib/errors/database.error.js'

const findUserByEmail = async (email) => {
  const query = 'SELECT * FROM usuario WHERE email = $1'
  try {
    const { rows } = await pool.query(query, [email])
    console.log(rows[0])
    return rows[0]
  } catch (error) {
    getDatabaseError(error.code)
    return { message: 'Error al crear el usuario', error: error.message }
  }
}

const create = async ({ email, password, rol }) => {
  console.log('IN CREATE')
  const query =
    'INSERT INTO usuario (email, password, rol ) VALUES ($1, $2, $3) RETURNING *'
  try {
    const { rows } = await pool.query(query, [email, password, rol])
    console.log(rows[0])
    return rows[0]
  } catch (error) {
    throw new Error(getDatabaseError(error.code))
  }
}

export const userModel = {
  findUserByEmail,
  create
}
