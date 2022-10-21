const { Router } = require('express')
const router = Router()
const controller = require('../controllers/profilesController')

router.get('/', controller.getAllProfiles)
router.post('/', controller.createProfile)
router.get('/:id', controller.getProfileById)

module.exports = router
