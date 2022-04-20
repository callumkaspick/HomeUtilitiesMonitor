module.exports = (sequelize, DataTypes) => {
    const CircuitName = sequelize.define('CircuitName', {
        givenName: {
            type: DataTypes.STRING,
        },
        circuitID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        // id: {
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV1,
        //     primaryKey: true,
        //     unique: true
        // } 
        },
        {
            hooks: {
        }
    })
  
    CircuitName.associate = (models) => {
        CircuitName.belongsTo(models.ElectricDevice)
        models.ElectricDevice.hasMany(CircuitName)
      
    }
    
  
    return CircuitName
  }
  