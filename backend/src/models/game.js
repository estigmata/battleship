module.exports = (sequelize, DataTypes) => sequelize.define('game', {
  boardColumns: {
    type: DataTypes.INTEGER
  },
  boardRows: {
    type: DataTypes.INTEGER
  },
  playerId: {
    type: DataTypes.STRING
  },
  session: {
    type: DataTypes.STRING
  },
  token: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  tableName: 'game',
  timestamps: false
})
