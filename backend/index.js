const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const env = require('./dev/env')
const db = require('./src/config/db')
const Game = require('./src/controllers/game')

const port = env.PORT

app.use(bodyParser.json())

app.get('/api/v1/games', (req, res) => {
  Game.join(req.query.token)
    .then(game => res.send(game))
    .catch(error => {
      console.log('Error: The game could not found.', error)
      res.status(404)
      res.send(error)
    })
})

app.post('/api/v1/games', (req, res) => {
  Game.create(req.body)
    .then(game => res.send(game))
    .catch(error => {
      console.log('Error: The game could not been created.', error)
      res.status(500)
      res.send(error)
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
