module.exports = (sequelize, DataTypes) => {
    const WaterMinutes = sequelize.define('WaterMinutes', {
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
  
    WaterMinutes.associate = (models) => {
      WaterMinutes.belongsTo(models.WaterDevice)
      models.WaterDevice.hasMany(WaterMinutes)
    }
    
  
    return WaterMinutes
  }
  