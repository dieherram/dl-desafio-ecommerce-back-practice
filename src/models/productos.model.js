import { pool } from '../database/connection.js'
import { getDatabaseError } from '../lib/errors/database.error.js'

// Obtener todos los productos
const getAllProducts = async () => {
  const query = 'SELECT * FROM producto'
  try {
    const { rows } = await pool.query(query)
    return rows
  } catch (error) {
    throw new Error(getDatabaseError(error.code))
  }
}

// Obtener producto por ID
const getProductById = async (id) => {
  const query = 'SELECT * FROM producto WHERE producto_id = $1'
  try {
    const { rows } = await pool.query(query, [id])
    return rows[0]
  } catch (error) {
    throw new Error(getDatabaseError(error.code))
  }
}

// Actualizar producto por ID
const updateProductById = async (id, { nombre, descripcion, precio, stock, categoria_id }) => {
  const query = `
    UPDATE producto 
    SET nombre = $1, descripcion = $2, precio = $3, stock = $4, categoria_id = $5
    WHERE producto_id = $6 RETURNING *
  `
  const values = [nombre, descripcion, precio, stock, categoria_id, id]
  try {
    const { rows } = await pool.query(query, values)
    return rows[0]
  } catch (error) {
    throw new Error(getDatabaseError(error.code))
  }
}

// Eliminar producto por ID
const deleteProductById = async (id) => {
  const query = 'DELETE FROM producto WHERE producto_id = $1 RETURNING *'
  try {
    const { rows } = await pool.query(query, [id])
    return rows[0]
  } catch (error) {
    throw new Error(getDatabaseError(error.code))
  }
}

// Crear un nuevo producto
const addProduct = async (productData) => {
  const { nombre, descripcion, precio, stock, categoria_id } = productData
  try {
    const result = await pool.query(
      'INSERT INTO producto (nombre, descripcion, precio, stock, categoria_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nombre, descripcion, precio, stock, categoria_id]
    )
    return result.rows[0]
  } catch (error) {
    console.error('Error creating product in model:', error)
    throw error
  }
}

export const productModel = {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  addProduct
}
