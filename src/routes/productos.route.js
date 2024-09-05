import { Router } from 'express'
import { productController } from '../controllers/productos.controller.js'

const router = Router()

router.get('/productos', productController.getAllProducts)
router.get('/productos/:id', productController.getProductById)
router.put('/productos/:id', productController.updateProductById)
router.delete('/productos/:id', productController.deleteProductById)

export default router
