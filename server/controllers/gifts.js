import pool from '../config/database.js'

// GET all gifts
const getGifts = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    console.error('Error getting gifts:', error)
    res.status(500).json({ error: 'An error occurred while fetching gifts' })
  }
}

// GET one gift by id
const getGiftById = async (req, res) => {
  try {
    const { giftId } = req.params

    const result = await pool.query(
      'SELECT * FROM gifts WHERE id = $1',
      [giftId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Gift not found' })
    }

    res.status(200).json(result.rows[0])
  } catch (error) {
    console.error('Error getting gift by id:', error)
    res.status(500).json({ error: 'An error occurred while fetching the gift' })
  }
}

// CREATE a new gift
const createGift = async (req, res) => {
  try {
    const {
      name,
      pricepoint,
      audience,
      image,
      description,
      submittedby,
      submittedon
    } = req.body

    const result = await pool.query(
      `INSERT INTO gifts
      (name, pricepoint, audience, image, description, submittedby, submittedon)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [name, pricepoint, audience, image, description, submittedby, submittedon]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error creating gift:', error)
    res.status(500).json({ error: 'An error occurred while creating the gift' })
  }
}

// UPDATE an existing gift
const updateGift = async (req, res) => {
  try {
    const { giftId } = req.params
    const {
      name,
      pricepoint,
      audience,
      image,
      description,
      submittedby,
      submittedon
    } = req.body

    const result = await pool.query(
      `UPDATE gifts
      SET name = $1,
          pricepoint = $2,
          audience = $3,
          image = $4,
          description = $5,
          submittedby = $6,
          submittedon = $7
      WHERE id = $8
      RETURNING *`,
      [name, pricepoint, audience, image, description, submittedby, submittedon, giftId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Gift not found' })
    }

    res.status(200).json(result.rows[0])
  } catch (error) {
    console.error('Error updating gift:', error)
    res.status(500).json({ error: 'An error occurred while updating the gift' })
  }
}

// DELETE a gift
const deleteGift = async (req, res) => {
  try {
    const { giftId } = req.params

    const result = await pool.query(
      'DELETE FROM gifts WHERE id = $1 RETURNING *',
      [giftId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Gift not found' })
    }

    res.status(200).json({ message: 'Gift deleted successfully' })
  } catch (error) {
    console.error('Error deleting gift:', error)
    res.status(500).json({ error: 'An error occurred while deleting the gift' })
  }
}

export default {
  getGifts,
  getGiftById,
  createGift,
  updateGift,
  deleteGift
}


