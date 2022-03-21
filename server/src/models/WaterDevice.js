const sequelize = new Sequelize('sqlite::memory:')
const { BelongsTo } = require('sequelize/types')
const User = require('User')

module.exports = (sequelize, DataTypes) => {
  const WaterDevice = sequelize.define('WaterDevice', {
    hooks: {
    }
  })

  WaterDevice.associate = function (models) {
    BelongsTo(User)
  }

  return WaterDevice
}
