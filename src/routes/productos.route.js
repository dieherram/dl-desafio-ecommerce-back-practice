import { Router } from 'express'
import { productController } from '../controllers/productos.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

const router = Router()

router.get('/products', productController.getAllProducts)
router.get('/products/:id', productController.getProductById)
router.post('/products', authMiddleware, productController.createProduct)
router.put('/products/:id', authMiddleware, productController.updateProductById)
router.delete('/products/:id', authMiddleware, productController.deleteProductById)

export default router
