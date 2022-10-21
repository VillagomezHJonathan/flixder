const { Router } = require('express')
const router = Router()
const controller = require('../controllers/genresController')

router.get('/', controller.getAllGenres)

router.get('/:id', controller.getGenreById)

module.exports = router
