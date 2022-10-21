const { Router } = require('express')
const router = Router()
const controller = require('../controllers/regionsController')

router.get('/', controller.getAllRegions)

router.get('/:id', controller.getRegionById)

module.exports = router
