import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Obtenemos la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Cargamos el archivo .env que está en la carpeta server
dotenv.config({ path: path.resolve(__dirname, '../.env') })