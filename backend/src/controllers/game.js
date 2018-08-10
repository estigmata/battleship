const env = require('../../dev/env')
const generateId = require('../libs/generate.id')
const db = require('../config/db')

class Game {
  constructor({cols = 10, rows = 10} = {}) {
    this.boardColumns = cols
    this.boardRows = rows
  }
  static create(gameData) {
    const game = new Game({cols: gameData.columns, rows: gameData.rows})
    game.playerId = generateId()
    game.token = generateId()
    game.session = `http://${env.HOST}:${env.PORT}/api/v1/game?token=${game.token}`
    return db.game.create(game)
      .then(newGame => newGame)
      .catch(error => {
        console.log('Error. New game could not been created.', error)
        throw error
      })
  }
}

module.exports = Game
