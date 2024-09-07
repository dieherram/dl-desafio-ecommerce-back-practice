import { Router } from 'express'
import { productController } from '../controllers/productos.controller.js'

const router = Router()

router.get('/products', productController.getAllProducts)
router.get('/products/:id', productController.getProductById)
router.post('/products', productController.createProduct)
router.put('/products/:id', productController.updateProductById)
router.delete('/products/:id', productController.deleteProductById)
// Ruta para manejar la funcionalidad de "like" o "favoritos"
router.patch('/products/:id/like', productController.toggleLikeProduct)

export default router
