import { productModel } from '../models/productos.model.js'

// Obtener todos los productos (sin validación de usuario)
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts()
    return res.status(200).json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Obtener producto por ID
const getProductById = async (req, res) => {
  const { id } = req.params
  try {
    const product = await productModel.getProductById(id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    return res.status(200).json(product)
  } catch (error) {
    console.error('Error fetching product by id:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Crear un nuevo producto (requiere ID de usuario)
const createProduct = async (req, res) => {
  const { modelo, marca, descripcion, precio, stock, img, categoria, favorito } = req.body
  const userId = req.user.id

  try {
    const newProduct = await productModel.addProduct({
      modelo,
      marca,
      descripcion,
      precio,
      stock,
      img,
      categoria,
      favorito,
      userId // Asigna el ID del usuario al producto
    })
    return res.status(201).json(newProduct)
  } catch (error) {
    console.error('Error creating product:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Actualizar producto y cambiar estado de "like" (requiere ID de usuario)
const updateProductById = async (req, res) => {
  const { id } = req.params
  const { modelo, marca, descripcion, precio, stock, img, categoria, favorito } = req.body
  const userId = req.user.id

  try {
    // Verifica si el producto existe
    const product = await productModel.getProductById(id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    // Verifica si el usuario tiene permiso para modificar el producto
    if (product.userId !== userId) {
      return res.status(403).json({ message: 'Forbidden: You cannot modify this product' })
    }

    // Actualiza el producto
    const updatedProduct = await productModel.updateProductById(id, {
      modelo,
      marca,
      descripcion,
      precio,
      stock,
      img,
      categoria,
      favorito
    })
    
    return res.status(200).json(updatedProduct)
  } catch (error) {
    console.error('Error updating product:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Eliminar producto por ID (requiere ID de usuario)
const deleteProductById = async (req, res) => {
  const { id } = req.params
  const userId = req.user.id

  try {
    const product = await productModel.getProductById(id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    if (product.userId !== userId) {
      return res.status(403).json({ message: 'Forbidden: You cannot delete this product' })
    }

    const deletedProduct = await productModel.deleteProductById(id)
    return res.status(200).json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const productController = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById
}
