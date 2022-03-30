module.exports = (sequelize, DataTypes) => {
    const WaterDays = sequelize.define('WaterDays', {
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
  
    WaterDays.associate = (models) => {
      WaterDays.belongsTo(models.WaterDevice)
      models.WaterDevice.hasMany(WaterDays)
    }
    
  
    return WaterDays
  }
  