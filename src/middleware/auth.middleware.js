import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' })
  }

  const token = authHeader.split(' ')[1] // Assuming "Bearer <token>" format

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    next()
  } catch (error) {
    console.error('Token verification failed:', error)
    if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ error: 'Invalid token' })
    }
    return res.status(500).json({ error: 'Internal server error' })
  }
}
