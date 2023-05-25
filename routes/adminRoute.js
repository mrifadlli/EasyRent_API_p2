const express = require('express')
const router = express.Router()

const carController = require('../controllers/admin/car/car')
const transmissionController = require('../controllers/admin/car/transmission')
const imageController = require('../controllers/admin/car/images')

const appointmentController = require('../controllers/admin/appointment/appointment')

router.get('/car', carController.getCars)
router.get('/car/:id', carController.getCar)
router.put('/car/:id', carController.editCar)
router.post('/car/', carController.addCar)
router.delete('/car/:id', carController.deleteCar)

router.get('/transmission', transmissionController.getTransmissions)
router.get('/transmission/:id', transmissionController.getTransmission)
router.get('/image', imageController.getImages)
router.get('/image/:id', imageController.getImage)

router.get('/appointment', appointmentController.getAppointments)
router.get('/appointment/:id', appointmentController.getAppointment)
router.put('/appointment/:id', appointmentController.editAppointment)
router.post('/appointment/', appointmentController.addAppointment)
router.delete('/appointment/:id', appointmentController.deleteAppointment)

module.exports = router
