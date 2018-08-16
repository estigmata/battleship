module.exports = (sequelize, DataTypes) => sequelize.define('game', {
  PlayerOwner: {
    type: DataTypes.STRING
  },
  PlayerOponent: {
    type: DataTypes.STRING
  },
  Session: {
    type: DataTypes.STRING
  },
  Token: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  tableName: 'game',
  timestamps: false
})
