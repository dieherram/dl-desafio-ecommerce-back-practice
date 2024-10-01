import jwt from 'jsonwebtoken'

const getPayloadFromToken = (req) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return null
  }

  const token = authHeader.split(' ') // Assuming "Bearer <token>" format

  if (!token) {
    return null
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    return payload
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}

export const getPayload = getPayloadFromToken
