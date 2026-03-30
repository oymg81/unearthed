// Importamos Express para crear el servidor
import express from 'express'

// Cargamos las variables de entorno desde .env
import './config/dotenv.js'

// Importamos CORS para permitir requests desde el frontend
import cors from 'cors'

// Importamos las rutas de gifts
import giftsRouter from './routes/gifts.js'


// Creamos la app de Express
const app = express()

// Permitimos solicitudes desde otros puertos/dominios
app.use(cors())

// Registramos las rutas de gifts
app.use('/gifts', giftsRouter)

// Ruta principal
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

// Puerto del servidor
const PORT = process.env.PORT || 3001

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})