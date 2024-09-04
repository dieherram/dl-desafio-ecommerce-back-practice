import { Router } from 'express'
import { userController } from '../controllers/user.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'

const router = Router()

router.post('/login', userController.login)
router.post('/signup', userController.signup)
router.get('/usuarios', authMiddleware, userController.usuarios)

export default router
