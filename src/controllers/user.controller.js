import 'dotenv/config'
import bcript from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { userModel } from '../models/user.model.js'

const signup = async (req, res) => {
  const { email, password } = req.body

  try {
    // 1. Validaciones básicas (puedes agregar más según tus necesidades)
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    // 2. Verificar si el usuario ya existe (usando el modelo)
    const existingUser = await userModel.findUserByEmail(email)
    console.log(existingUser)
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' })
    }

    // 3. Hashear la contraseña
    const hashedPassword = await bcript.hash(password, 10)

    // 4. Crear el usuario en la base de datos (usando el modelo)
    const newUser = await userModel.create({
      email: email.toLowerCase(), // Guardar email en minúsculas
      password: hashedPassword,
      rol: 'user'
    })

    // 5. Manejo de errores del modelo
    if (!newUser) {
      return res.status(500).json({ message: 'Failed to create user' })
    }

    // 6. Respuesta exitosa (puedes generar un token JWT aquí si lo necesitas)
    return res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    console.error('Error during signup:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await userModel.findUserByEmail(email)
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }

    const isMatch = bcript.compareSync(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // creación del payload
    const payload = {
      email,
      user_id: user.id,
      rol: user.rol,
      nombre: user.nombre,
      apellido: user.apellido,
      direccion: user.direccion,
      telefono: user.telefono
    }
    console.log(payload)
    // creación del token
    console.log(process.env.JWT_SECRET)
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })

    return res.status(200).json({
      message: 'Login successfully',
      token,
      email
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const usuarios = async (req, res) => {
  try {
    const users = await userModel.findOneEmail(req.user.email)
    return res.status(200).json(users)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const userController = {
  login,
  signup,
  usuarios
}
