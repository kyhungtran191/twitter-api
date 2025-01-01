import express from 'express'
import usersRouter from './routes/users.routes'
import dbService from '~/services/database.services'

const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/users', usersRouter)

// Run DB
dbService.connect()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
