const express = require('express')
const router = express.Router()
const usersControler = require('../controllers/usersControler')
const verifyToken = require('../middleware/verifyToken')
const refreshToken = require('../controllers/refreshToken')

router.get('/users', verifyToken.verifyToken, usersControler.getUsers)
router.post('/users', usersControler.Register)
router.post('/login', usersControler.Login)
router.get('/token', refreshToken.refreshToken)
router.delete('/logout', usersControler.Logout)
// console.log(getUsers());

module.exports = router
