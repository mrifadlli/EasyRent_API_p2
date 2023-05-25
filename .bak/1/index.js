const express = require('express')
const app = express()
const { sequelize } = require('./models')
// const apiRouter = require('./routes/api');
const { initializeDb } = require('./config/database')

// Set up body parsing middleware
app.use(express.json())

// Set up API routes
// app.use('/api', apiRouter);

// Connect to database and start server
initializeDb()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server listening on port 3000!')
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
