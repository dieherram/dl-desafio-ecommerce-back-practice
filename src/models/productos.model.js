import { pool } from '../database/connection.js'
import { getDatabaseError } from '../lib/errors/database.error.js'

// Obtener todos los productos
const getAllProducts = async () => {
  const query = 'SELECT * FROM Producto'
  try {
    const { rows } = await pool.query(query)
    return rows
  } catch (error) {
    throw new Error(getDatabaseError(error.code))
  }
}

// Obtener producto por ID
const getProductById = async (id) => {
  const query = 'SELECT * FROM Producto WHERE id = $1'
  try {
    const { rows } = await pool.query(query, [id])
    return rows[0]
  } catch (error) {
    throw new Error(getDatabaseError(error.code))
  }
}

// Crear un nuevo producto
const addProduct = async (productData) => {
  const { modelo, marca, descripcion, precio, stock, img, categoria, favorito, user_id } = productData
  console.log('addProduct')
  console.log(user_id)
  try {
    console.log('try addProduct')
    const result = await pool.query(
      'INSERT INTO Producto (modelo, marca, descripcion, precio, stock, img, categoria, favorito, id_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [modelo, marca, descripcion, precio, stock, img, categoria, favorito, user_id]
    )
    return result.rows[0]
  } catch (error) {
    console.error('Error creating product in model:', error)
    throw error
  }
}

// Actualizar producto por ID
const updateProductById = async (id, { modelo, marca, descripcion, precio, stock, img, categoria, favorito }) => {
  const query = `
    UPDATE Producto 
    SET modelo = $1, marca = $2, descripcion = $3, precio = $4, stock = $5, img = $6, categoria = $7, favorito = $8
    WHERE id = $9 RETURNING *
  `
  const values = [modelo, marca, descripcion, precio, stock, img, categoria, favorito, id]
  try {
    const { rows } = await pool.query(query, values)
    return rows[0]
  } catch (error) {
    throw new Error(getDatabaseError(error.code))
  }
}

// Eliminar producto por ID
const deleteProductById = async (id) => {
  const query = 'DELETE FROM Producto WHERE id = $1 RETURNING *'
  try {
    const { rows } = await pool.query(query, [id])
    return rows[0]
  } catch (error) {
    throw new Error(getDatabaseError(error.code))
  }
}

export const productModel = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById
}
