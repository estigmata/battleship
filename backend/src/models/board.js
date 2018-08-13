module.exports = () => sequelize.define('board', {
  columns: {
    type: DataTypes.INTEGER
  },
  gameId: {
    type: DataTypes.INTEGER
  },
  playerId: {
    type: DataTypes.STRING
  },
  rows: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true,
  tableName: 'board',
  timestamps: false
})
