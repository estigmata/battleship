const env = require('../../dev/env')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  env.DATABASE.NAME,
  env.DATABASE.USER,
  env.DATABASE.PASS,
  {
    host: env.DATABASE.HOST,
    dialect: env.DATABASE.DIALECT,
    port: env.DATABASE.PORT,
    dialectOptions: {
      requestTimeout: 30000,
      encrypt: true
    }
  })

const db = {}

db.sequelize = sequelize

db.game = require('../models/game')(sequelize, Sequelize)

module.exports = db

/*
const Sequelize = require('sequelize')
const GameModel = require('./models/game')
const sequelize = new Sequelize('master', 'sa', 'sql.root.123', {
  host: '10.28.106.76',
  dialect: 'mssql',
  port: 1433,
  logging: false,
  dialectOptions: {
    requestTimeout: 30000,
    encrypt: true
  }
})

const Game = GameModel(sequelize, Sequelize)

sequelize.sync({force: true})
  .then(() => {
    console.log('Database & tables created!');
  })

module.exports = { Game }
*/
