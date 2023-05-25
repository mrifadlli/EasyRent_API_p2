const express = require('express')
const router = express.Router()
const hiController = require('../controllers/hiController')

router.get('/', hiController.getHi)
router.put('/', hiController.repeatHi)
router.post('/', hiController.repeatHi)

module.exports = router
