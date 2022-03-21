const User = require('./User')

module.exports = (sequelize, DataTypes) => {
  const WaterDevice = sequelize.define('WaterDevice', {
  },
  {
    hooks: {
    }
  })

  WaterDevice.associate = (models) => {
    WaterDevice.belongsTo(models.User)
    models.User.hasOne(WaterDevice)
  }

  return WaterDevice
}
