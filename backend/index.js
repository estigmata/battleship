const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const env = require('./dev/env')
const db = require('./src/config/db')

const port = env.PORT

app.use(bodyParser.json())

app.post('/api/v1/games', (req, res) => {
  const playerId = req.body.playerId
  const token = req.body.token
  db.game.create({
    playerId: playerId,
    token: token
  })
    .then(newGame => res.json(newGame))
    .catch(error => {
      console.log('Error: Creating new game.', error)
      throw error
    })
})

db.sequelize.sync()
  .then(() => {
    console.log('Database connection has been established successfully.')
    app.listen(port, () => {
      console.log(`Web server listening on: ${port}`)
    })
  })
  .catch(error => {
    console.log('Error: Database connection failed.', error)
    throw error
  })
