module.exports = (sequelize, DataTypes) => {
    const ElectricSeconds = sequelize.define('ElectricSeconds', {
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
  
    ElectricSeconds.associate = (models) => {
      ElectricSeconds.belongsTo(models.ElectricDevice)
      models.ElectricDevice.hasMany(ElectricSeconds)
      
    }
    
  
    return ElectricSeconds
  }
  