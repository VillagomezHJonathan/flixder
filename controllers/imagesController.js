const { Image } = require('../models')

const getAllImages = async (req, res) => {
  try {
    const images = await Image.find()

    return res.status(201).json({
      images
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const getImageById = async (req, res) => {
  try {
    const { id } = req.params
    const image = await Image.findOne({ _id: id })

    return res.status(201).json({ image })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllImages,
  getImageById
}
