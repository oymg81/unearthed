// Importamos la librería pg para conectarnos a PostgreSQL
import pg from 'pg'

// Creamos la configuración usando las variables de entorno
const config = {
  // Usuario de la base de datos
  user: process.env.PGUSER,

  // Contraseña de la base de datos
  password: process.env.PGPASSWORD,

  // Host de la base de datos
  host: process.env.PGHOST,

  // Puerto de PostgreSQL
  port: process.env.PGPORT,

  // Nombre de la base de datos
  database: process.env.PGDATABASE,

  // Render requiere SSL/TLS para conexiones externas
  ssl: {
    rejectUnauthorized: false
  }
}

// Mostramos la configuración en consola para verificar que sí carga .env
// Puedes quitar este console.log después
console.log('DB CONFIG:', config)

// Creamos el pool de conexiones
const pool = new pg.Pool(config)

// Exportamos el pool para usarlo en los controladores
export default pool