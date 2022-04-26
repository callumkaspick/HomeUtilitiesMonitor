module.exports = (sequelize, DataTypes) => {
    const MockWaterSeconds = sequelize.define('MockWaterSeconds', {
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
  
    MockWaterSeconds.associate = (models) => {
      MockWaterSeconds.belongsTo(models.WaterDevice)
      models.WaterDevice.hasMany(MockWaterSeconds)
      
    }
    
  
    return MockWaterSeconds
  }