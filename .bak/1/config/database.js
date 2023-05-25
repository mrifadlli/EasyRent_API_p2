const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('easyrent_p1', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

// console.log(sequelize)

const Test = require('../models/test')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error)
  })

sequelize.sync()

module.exports = {
  sequelize,
  Test,
}
