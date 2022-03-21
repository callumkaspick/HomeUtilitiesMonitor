const User = require('./User')

module.exports = (sequelize, DataTypes) => {
  const WaterDevice = sequelize.define('WaterDevice', {
    waterDeviceID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        unique: true
    },
  },
  {
    hooks: {
    }
  })

  WaterDevice.associate = (models) => {
    WaterDevice.belongsTo(models.User)
    models.User.hasOne(WaterDevice)
    WaterDevice.hasMany(models.WaterSeconds)
    models.WaterSeconds.belongsTo(WaterDevice)
    WaterDevice.hasMany(models.WaterMinutes)
    models.WaterMinutes.belongsTo(WaterDevice)
    WaterDevice.hasMany(models.WaterHours)
    models.WaterHours.belongsTo(WaterDevice)
    WaterDevice.hasMany(models.WaterDays)
    models.WaterDays.belongsTo(WaterDevice)
  }

  return WaterDevice
}
