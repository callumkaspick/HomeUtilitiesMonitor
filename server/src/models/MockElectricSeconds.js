module.exports = (sequelize, DataTypes) => {
    const MockElectricSeconds = sequelize.define('MockElectricSeconds', {
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
  
    MockElectricSeconds.associate = (models) => {
      MockElectricSeconds.belongsTo(models.ElectricDevice)
      models.ElectricDevice.hasMany(MockElectricSeconds)
      
    }
    
  
    return MockElectricSeconds
  }
  