const { Router } = require('express')
const router = Router()
const controller = require('../controllers/profilesController')

router.get('/', controller.getAllProfiles)
router.post('/', controller.createProfile)

router.get('/:id', controller.getProfileById)
router.delete('/:id', controller.deleteProfile)
router.put('/:id', controller.updateProfile)

module.exports = router
