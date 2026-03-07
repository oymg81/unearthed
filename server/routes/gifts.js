import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import GiftsController from '../controllers/gifts.js'

// Eliminamos esta linea porque ahora los datos se obtienen de PostgreSQL
// import giftData from '../data/gifts.js'

const router = express.Router()

// ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// GET /gifts/
router.get('/', GiftsController.getGifts)


// GET /gifts/:giftId
router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(
        path.resolve(__dirname, '../../client/public/gift.html')
    )
})

export default router