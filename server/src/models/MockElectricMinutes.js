module.exports = (sequelize, DataTypes) => {
    const MockElectricMinutes = sequelize.define('MockElectricMinutes', {
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
  
    MockElectricMinutes.associate = (models) => {
      MockElectricMinutes.belongsTo(models.ElectricDevice)
      models.ElectricDevice.hasMany(MockElectricMinutes)
      
    }
    
  
    return MockElectricMinutes
  }
  