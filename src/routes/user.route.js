import { Router } from 'express'
import { userController } from '../controllers/user.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

const router = Router()

router.post('/login', userController.login)
router.post('/signup', userController.signup)
router.put('/usuario', authMiddleware, userController.update)
router.get('/usuario/:id', authMiddleware, userController.getUsuario)

export default router
