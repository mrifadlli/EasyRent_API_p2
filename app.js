require('./features/🥚')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')

const hiRoute = require('./routes/hiRoute')
const apiRoute = require('./routes/apiRoute')
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')

const db = require('./db/connection')
const app = express()
dotenv.config()

db.connection
  .sync({ force: true })
  .then(() => {
    console.log('db syncronized!')
    require('./features/bulkCreate/migrate_json_to_db')(db)
  })
  .catch((err) => console.log('cannot syncronize db', err))

// app.use(cors())
app.use(cors({ credentials: true }))
app.use(morgan('tiny'))
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ error: 'you should either use `/api`, `/admin`, or `/user`' })
})
app.use('/hi', hiRoute)
app.use('/api', apiRoute)
app.use('/user', userRoute)
app.use('/admin', adminRoute)

app.listen(process.env.PORT, () => {
  console.log(`Running in ${process.env.PORT}`)
})
