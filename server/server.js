// Importamos la librería Express
// Express es un framework para crear servidores en Node.js
import express from 'express'
import giftsRouter from './routes/gifts.js'

// Creamos una aplicación Express
// "app" representa nuestro servidor
const app = express()


// 🔹 Middleware 1
// Le decimos a Express:
// Cuando alguien visite /public en el navegador,
// sirve archivos desde la carpeta ../client/public
app.use('/public', express.static('../client/public'))


// 🔹 Middleware 2
// Cuando alguien visite /scripts,
// sirve archivos desde ../client/public/scripts
app.use('/scripts', express.static('../client/public/scripts'))

app.use('/gifts', giftsRouter)


// 🔹 Ruta principal (endpoint raíz)
// Cuando alguien entra a http://localhost:3001/
// ejecuta esta función
app.get('/', (req, res) => {

  // res.status(200) significa:
  // "Todo salió bien"
  // 200 = HTTP status code OK

  // .send() envía una respuesta al navegador
  res.status(200).send(
    '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>'
  )
})


// 🔹 Puerto del servidor
// process.env.PORT es una variable de entorno
// Si existe (en producción), la usa.
// Si no existe, usa 3001.
const PORT = process.env.PORT || 3001


// 🔹 Arranca el servidor
// Hace que el servidor escuche en el puerto definido
app.listen(PORT, () => {

  // Mensaje en consola cuando el server está listo
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})