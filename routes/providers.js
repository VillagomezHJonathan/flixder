const { Router } = require('express')
const router = Router()
const controller = require('../controllers/providersController')

router.get('/', controller.getAllProviders)

router.get('/:id', controller.getProviderById)

module.exports = router
