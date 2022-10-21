const { Genre } = require('../models')

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find()

    return res.status(201).json({
      genres
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const getGenreById = async (req, res) => {
  try {
    const { id } = req.params
    const genre = await Genre.findOne({ _id: id })

    return res.status(201).json({ genre })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllGenres,
  getGenreById
}
