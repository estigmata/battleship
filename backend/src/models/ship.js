module.exports = (sequelize, DataTypes) => sequelize.define('ship', {
  BoardId: {
    type: DataTypes.INTEGER
  },
  GameId: {
    type: DataTypes.STRING
  },
  Name: {
    type: DataTypes.STRING
  },
  PlayerId: {
    type: DataTypes.STRING
  },
  Size: {
    type: DataTypes.INTEGER
  },
  CoordX: {
    type: DataTypes.INTEGER
  },
  CoordY: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true,
  tableName: 'ship',
  timestamps: false
})
