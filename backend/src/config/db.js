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
