module.exports = (sequelize, DataTypes) => sequelize.define('game', {
  playerId: {
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
