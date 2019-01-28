import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import users from './src/routes/users'

const app = express()
const port = 4000

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

app.use('/api/users', users)

app.listen(port, () => console.log(`Server running on port ${port}.`))
