const { Router } = require('express')
const router = Router()
const controller = require('../controllers/moviesController')

router.get('/', controller.getAllMovies)
router.post('/', controller.createMovie)

router.get('/:id', controller.getMovieById)

router.get('/tmdb/:id', controller.getMovieByTmdbId)

module.exports = router
