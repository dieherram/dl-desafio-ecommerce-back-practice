import { productModel } from '../models/productos.model.js'

// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts()
    return res.status(200).json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
console.log(getAllProducts)

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

// Actualizar producto por ID
const updateProductById = async (req, res) => {
  const { id } = req.params
  const { modelo, marca, descripcion, precio, stock, imagen_url, categoria, favorito } = req.body;
  try {
    const updatedProduct = await productModel.updateProductById(id, { modelo, marca, descripcion, precio, stock, imagen_url, categoria, favorito });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }
    return res.status(200).json(updatedProduct)
  } catch (error) {
    console.error('Error updating product:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Eliminar producto por ID
const deleteProductById = async (req, res) => {
  const { id } = req.params
  try {
    const deletedProduct = await productModel.deleteProductById(id)
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }
    return res.status(200).json({ message: 'Product deleted successfully' })
  } catch (error) {
    console.error('Error deleting product:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Crear un nuevo producto
const createProduct = async (req, res) => {
  const { modelo, marca, descripcion, precio, stock, imagen_url, categoria, favorito } = req.body
  try {
    const newProduct = await productModel.addProduct({ modelo, marca, descripcion, precio, stock, imagen_url, categoria, favorito })
    return res.status(201).json(newProduct)
  } catch (error) {
    console.error('Error creating product:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

// Cambiar el estado de "like" o "favorito" del producto
const toggleLikeProduct = async (req, res) => {
  const { id } = req.params
  try {
    const product = await productModel.getProductById(id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    const updatedProduct = await productModel.toggleLikeProduct(id, !product.favorito)
    return res.status(200).json(updatedProduct)
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const productController = {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  createProduct,
  toggleLikeProduct
}
