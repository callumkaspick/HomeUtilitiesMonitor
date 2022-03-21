module.exports = (sequelize, DataTypes) => {
    const ElectricMinutes = sequelize.define('ElectricMinutes', {
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
  
    ElectricMinutes.associate = (models) => {
      ElectricMinutes.belongsTo(models.ElectricDevice)
      models.ElectricDevice.hasMany(ElectricMinutes)
      
    }
    
  
    return ElectricMinutes
  }
  