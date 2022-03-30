module.exports = (sequelize, DataTypes) => {
  const ElectricDevice = sequelize.define('ElectricDevice', {
    electricDeviceID: {
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

  ElectricDevice.associate = (models) => {
    ElectricDevice.belongsTo(models.User)
    models.User.hasOne(ElectricDevice)
    ElectricDevice.hasMany(models.ElectricSeconds)
    models.ElectricSeconds.belongsTo(ElectricDevice)
    ElectricDevice.hasMany(models.ElectricMinutes)
    models.ElectricMinutes.belongsTo(ElectricDevice)
    ElectricDevice.hasMany(models.ElectricHours)
    models.ElectricHours.belongsTo(ElectricDevice)
    ElectricDevice.hasMany(models.ElectricDays)
    models.ElectricDays.belongsTo(ElectricDevice)
    ElectricDevice.hasMany(models.CircuitNames)
    models.CircuitNames.belongsTo(ElectricDevice)
  }

  return ElectricDevice
}
