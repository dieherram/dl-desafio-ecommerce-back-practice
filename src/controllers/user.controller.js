import 'dotenv/config'
import bcript from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { userModel } from '../models/user.model.js'
import { getPayload } from '../lib/utils/auth.utils.js'

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

    // 6. Respuesta exitosa (generaramos un token JWT)
    const payload = {
      email: newUser.email,
      user_id: newUser.id,
      rol: newUser.rol,
      nombre: newUser.nombre,
      apellido: newUser.apellido,
      direccion: newUser.direccion,
      telefono: newUser.telefono
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })
    return res.status(201).json({
      message: 'User created successfully',
      token,
      email: newUser.email
    })
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
    // creación del token
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

const update = async (req, res) => {
  const payload = getPayload(req)
  console.log(payload)
  if (!payload) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { email, password, rol, nombre, apellido, direccion, telefono } = req.body
  try {
    const user = await userModel.update(payload.user_id, { email, password, rol, nombre, apellido, direccion, telefono })
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const getUsuario = async (req, res) => {
  const { id } = req.params
  try {
    const user = await userModel.findById(id)
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

export const userController = {
  login,
  signup,
  update,
  getUsuario
}
