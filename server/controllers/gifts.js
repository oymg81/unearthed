// Import the database connection pool
import pool from '../config/database.js'

// Controller: Get all gifts
// req = request del client
// res = response del server

const getGifts = async (req, res) => {

    try {
        // Ejecutamos una consulta SQL para obtener todos los regalos
        const results = await pool.query(
            'SELECT * FROM gifts ORDER BY id ASC'
        )
        // results.rows contiene un array con los regalos obtenidos de la base de datos
        // Enviamos al cliente en formato JSON el array de regalos
        res.status(200).json(results.rows)

    } catch (error) {
        // Si ocurre un error lo mostramos en la comnsola del servidor y enviamos un mensaje de error al cliente
        console.error('Error getting gifts:', error)

        // Respondemos con un error 500
        res.status(500).json({ error: 'An error occurred while fetching gifts' })

    }
}

// Exportamos la funcion getGifts para que pueda ser utilizada en otras partes de la aplicación, como en las rutas.
export default { getGifts }