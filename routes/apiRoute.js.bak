const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const usersControler = require('../controllers/usersControler')
const verifyToken = require('../middleware/verifyToken')
const refreshToken = require('../controllers/refreshToken')
// const verifyToken = require("../middleware/verifyToken");
// const {
//   getUsers,
// //   Login,
// //   Logout,
// //   Register,
// } = require("../controllers/usersControler");

// const getUsers = require('../controllers/usersControler');
// const Register = require('../controllers/usersControler');
// const Login = require('../controllers/usersControler');
// const Logout = require('../controllers/usersControler');
// const {getUsers} = require("../controllers/usersControler")

router.get('/cars', apiController.getCars)
router.get('/cars/sortby/:sortby', apiController.getCarsSortBy)

// router.get('/cars/sortby/:sortby&:direction', apiController.getCarsSortBy)

// router.get('/cars')
// localhost.../cars?sortby=ID
// router.get('/cars/sortby/:direction/:sortby', apiController.getCarsSortBy)

router.get('/users', verifyToken.verifyToken, usersControler.getUsers)
router.post('/users', usersControler.Register)
router.post('/login', usersControler.Login)
router.get('/token', refreshToken.refreshToken)
// router.delete("/logout", Logout);
// console.log(getUsers());

module.exports = router
