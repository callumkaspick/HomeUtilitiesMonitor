module.exports = (sequelize, DataTypes) => {
    const MockWaterMinutes = sequelize.define('MockWaterMinutes', {
      data: {
        type: DataTypes.DOUBLE,
      },
      date: {
          type: DataTypes.INTEGER,
          primaryKey: true,
      }, 
      },{
      hooks: {
      }
    })
  
    MockWaterMinutes.associate = (models) => {
      MockWaterMinutes.belongsTo(models.WaterDevice)
      models.WaterDevice.hasMany(MockWaterMinutes)
      
    }
    
  
    return MockWaterMinutes
  }