const { Router } = require('express')
const router = Router()
const controller = require('../controllers/imagesController')

router.get('/', controller.getAllImages)

router.get('/:id', controller.getImageById)

module.exports = router
