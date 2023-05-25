const Sequelize = require('sequelize')
require('dotenv').config()

const DB_NAME = process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_DIALECT = process.env.DB_DIALECT

const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT,
  logging: false,
})

const db = {}

db.connection = connection
db.Sequelize = Sequelize

// db.user = require('../models/user')(connection, Sequelize)
db.cars = require('../models/cars')(connection, Sequelize)
db.transmissions = require('../models/transmissions')(connection, Sequelize)
db.images = require('../models/images')(connection, Sequelize)
db.users = require('../models/users')(connection, Sequelize)
db.orders = require('../models/orders')(connection, Sequelize)
db.appointments = require('../models/appointments')(connection, Sequelize)

module.exports = db
