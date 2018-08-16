const db = require('../config/db')

class Board {
  static addShips({gameId, playerId, shipsList} = {}) {
    const response = {}
    return db.ship.bulkCreate(shipsList, {returning: true})
      .then(result => {
        return result
      })
      .catch(error => {
        console.log('Error. Data could not be inserted.')
        throw error
      })
  }
}

module.exports = Board
