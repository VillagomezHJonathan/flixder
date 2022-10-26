const { Movie } = require('../models')

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find()

    return res.status(201).json({
      movies
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOne({ _id: id })

    return res.status(201).json({ movie })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const getMovieByTmdbId = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOne({ tmdb_id: id })

    return res.status(201).json({ movie })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

const createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body)

    return res.status(201).json(newMovie)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByTmdbId,
  createMovie
}
