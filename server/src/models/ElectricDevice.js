const sequelize = new Sequelize('sqlite::memory:')
const { BelongsTo } = require('sequelize/types')
const User = require('User')

module.exports = (sequelize, DataTypes) => {
  const ElectricDevice = sequelize.define('ElectricDevice', {
    hooks: {
    }
  })

  ElectricDevice.associate = function (models) {
    BelongsTo(User)
  }

  return ElectricDevice
}
