module.exports = (sequelize, DataTypes) => {
    const WaterHours = sequelize.define('WaterHours', {
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
  
    WaterHours.associate = (models) => {
      WaterHours.belongsTo(models.WaterDevice)
      models.WaterDevice.hasMany(WaterHours)
    }
    
  
    return WaterHours
  }
  