import cors from 'cors'
import express from 'express'
import 'dotenv/config'
import consoleLogger from './middleware/console.logger.js'
import userRoute from './routes/user.route.js'
import productRoute from './routes/productos.routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(consoleLogger)
app.use('/', userRoute)
app.use('/api', productRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    })

