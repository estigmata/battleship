module.exports = (sequelize, DataTypes) => sequelize.define('board', {
  Columns: {
    type: DataTypes.INTEGER
  },
  GameId: {
    type: DataTypes.INTEGER
  },
  Rows: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true,
  tableName: 'board',
  timestamps: false
})
