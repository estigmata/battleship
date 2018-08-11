module.exports = (sequelize, DataTypes) => sequelize.define('game', {
  columns: {
    type: DataTypes.INTEGER
  },
  playerOwner: {
    type: DataTypes.STRING
  },
  playerOponent: {
    type: DataTypes.STRING
  },
  rows: {
    type: DataTypes.INTEGER
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
