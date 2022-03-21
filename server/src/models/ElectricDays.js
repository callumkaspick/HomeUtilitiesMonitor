module.exports = (sequelize, DataTypes) => {
    const ElectricDays = sequelize.define('ElectricDays', {
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
  
    ElectricDays.associate = (models) => {
      ElectricDays.belongsTo(models.ElectricDevice)
      models.ElectricDevice.hasMany(ElectricDays)
      
    }
    
  
    return ElectricDays
  }
  