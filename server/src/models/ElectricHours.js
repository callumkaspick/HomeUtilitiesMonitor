module.exports = (sequelize, DataTypes) => {
    const ElectricHours = sequelize.define('ElectricHours', {
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
  
    ElectricHours.associate = (models) => {
      ElectricHours.belongsTo(models.ElectricDevice)
      models.ElectricDevice.hasMany(ElectricHours)
      
    }
    
  
    return ElectricHours
  }
  