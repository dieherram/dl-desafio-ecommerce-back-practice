import { Router } from 'express'
import { userController } from '../controllers/user.controller.js'
import { authMiddleware } from '../middleware/auth.middleware.js'
import multer from 'multer'

const upload = multer({ dest: './public/data/uploads/' })

const router = Router()

router.post('/login', userController.login)
router.post('/signup', userController.signup)
router.put('/usuario', authMiddleware, userController.update)
router.post('/usuario/profile', authMiddleware, upload.single('uploaded_file'), userController.profile)
router.get('/usuario', authMiddleware, userController.getUsuario)

export default router
