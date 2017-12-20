'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'valupos',
  'root',
  'root', {
    dialect: 'mysql',
    protocol: 'mysql',
    host: 'localhost',
    port: '3306',
    logging: process.env.APP_ENV === 'development' ? console.log : false,
    define: {
      timestamps: false
    },
    timezone: '+07:00'
  }
)

const db = {}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
