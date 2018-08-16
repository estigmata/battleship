const env = require('../../dev/env')
const generateId = require('../libs/generate.id')
const db = require('../config/db')

class Game {
  static create(gameData) {
    const response = {}
    const game = {}
    game.PlayerOwner = generateId()
    game.Token = generateId()
    game.Session = `http://${env.HOST}:${env.PORT}/api/v1/games?token=${game.Token}`
    return db.game.create(game)
      .then(newGame => {
        const board = {}
        response.gameId = newGame.id
        response.playerId = newGame.PlayerOwner
        response.session = newGame.Session
        board.Columns = gameData.columns || 10
        board.Rows = gameData.rows || 10
        board.GameId = newGame.id
        return db.board.create(board)
      })
      .then(newBoard => {
        response.boardId = newBoard.id
        return response
      })
      .catch(error => {
        console.log('Error. New game could not been created.', error)
        throw error
      })
  }
  static join(token) {
    const response = {}
    var playerId = generateId()
    return db.game.update({PlayerOponent: playerId}, {where: {Token: token}})
      .then(game => {
        response.playerId = playerId
        return response
      })
      .catch(error => {
        console.log('Error. Could not join in the game.', error)
        throw error
      })
  }
}

module.exports = Game
