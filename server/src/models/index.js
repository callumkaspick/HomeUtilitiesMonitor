const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../../config/config')[process.env.NODE_ENV]
const db = {}
console.log(process.env.NODE_ENV+ "")
const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  config.options,
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
