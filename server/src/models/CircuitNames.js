module.exports = (sequelize, DataTypes) => {
    const CircuitNames = sequelize.define('CircuitNames', {
      name: {
        type: DataTypes.STRING,
        unique: true
      },
      circuitID: {
          type: DataTypes.STRING,
          primaryKey: true,
      }, 
      },{
      hooks: {
      }
    })
  
    CircuitNames.associate = (models) => {
      CircuitNames.belongsTo(models.ElectricDevice)
      models.ElectricDevice.hasMany(CircuitNames)
      
    }
    
  
    return CircuitNames
  }
  