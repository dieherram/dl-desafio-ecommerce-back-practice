import { pool } from '../database/connection.js'
import { getDatabaseError } from '../lib/errors/database.error.js'

const findUserByEmail = async (email) => {
  const query = 'SELECT * FROM usuario WHERE email = $1'
  try {
    const { rows } = await pool.query(query, [email])
    return rows[0]
  } catch (error) {
    getDatabaseError(error.code)
    return { message: 'Error al crear el usuario', error: error.message }
  }
}

const findById = async (id) => {
  const query = 'SELECT * FROM usuario WHERE id = $1'
  try {
    const { rows } = await pool.query(query, [id])
    return rows[0]
  } catch (error) {
    getDatabaseError(error.code)
    return { message: 'Error al buscar el usuario', error: error.message }
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
const update = async (id, data) => {
  console.log('IN UPDATE')
  console.log(data)

  // 1. Create an array to store the SET clauses for the SQL query
  const setClauses = []

  // 2. Create an array to store the values for the parameterized query
  const values = []

  // 3. Iterate over the data object
  let valueIndex = 1 // Start from 1 for parameterized query placeholders
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      setClauses.push(`${key} = $${valueIndex}`)
      values.push(value)
      valueIndex++
    }
  }

  // 4. Check if there are any fields to update
  if (setClauses.length === 0) {
    console.warn('No fields to update')
    return null // Or throw an error if you want to handle it differently
  }

  // 5. Construct the SQL query
  const query = `UPDATE usuario SET ${setClauses.join(', ')} WHERE id = $${valueIndex} RETURNING *`
  values.push(id) // Add the id to the values array

  try {
    const { rows } = await pool.query(query, values)
    return rows[0]
  } catch (error) {
    console.error(error)
    throw new Error(getDatabaseError(error.code))
  }
}

export const userModel = {
  findUserByEmail,
  findById,
  create,
  update
}
