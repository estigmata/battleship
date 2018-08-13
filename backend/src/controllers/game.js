const env = require('../../dev/env')
const generateId = require('../libs/generate.id')
const db = require('../config/db')

class Game {
  constructor({cols = 10, rows = 10} = {}) {
    this.columns = cols
    this.rows = rows
  }
  static create(gameData) {
    const game = new Game({cols: gameData.columns, rows: gameData.rows})
    game.playerOwner = generateId()
    game.playerOponent = ''
    game.token = generateId()
    game.session = `http://${env.HOST}:${env.PORT}/api/v1/games?token=${game.token}`
    return db.game.create(game)
      .then(newGame => Promise.resolve({
        id: newGame.id,
        playerId: newGame.playerOwner,
        session: newGame.session
      }))
      .catch(error => {
        console.log('Error. New game could not been created.', error)
        Promise.reject(error)
      })
  }
  static join(token) {
    return db.game.update({playerOponent: generateId()}, {where: {token: token}})
      .then(game => Promise.resolve({
        id: game.id,
        playerOponent: game.playerOponent
      }))
      .catch(error => {
        console.log('Error. The game could not found.', error)
        Promise.reject(error)
      })
  }
}

module.exports = Game
