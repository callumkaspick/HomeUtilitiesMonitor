const User = require('./User')

module.exports = (sequelize, DataTypes) => {
  const ElectricDevice = sequelize.define('ElectricDevice', {
  },
  {
    hooks: {
    }
  })

  ElectricDevice.associate = (models) => {
    ElectricDevice.belongsTo(models.User)
    models.User.hasOne(ElectricDevice)
    
  }
  

  return ElectricDevice
}
