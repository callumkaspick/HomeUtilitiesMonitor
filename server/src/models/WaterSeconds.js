module.exports = (sequelize, DataTypes) => {
  const WaterSeconds = sequelize.define('WaterSeconds', {
    data: {
      type: DataTypes.STRING,
      unique: true
    },
    date: {
        type: DataTypes.STRING,
        primaryKey: true,
    }, 
    },{
    hooks: {
    }
  })

  WaterSeconds.associate = (models) => {
    WaterSeconds.belongsTo(models.WaterDevice)
    models.WaterDevice.hasMany(WaterSeconds)
    
  }
  

  return WaterSeconds
}
