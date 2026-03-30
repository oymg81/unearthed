

import express from 'express'
import GiftsController from '../controllers/gifts.js'

const router = express.Router()

router.get('/', GiftsController.getGifts)
router.get('/:giftId', GiftsController.getGiftById)
router.post('/', GiftsController.createGift)
router.put('/:giftId', GiftsController.updateGift)
router.delete('/:giftId', GiftsController.deleteGift)

export default router
