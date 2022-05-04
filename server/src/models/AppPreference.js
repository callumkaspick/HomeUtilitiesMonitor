const User = require('./User')

module.exports = (sequelize, DataTypes) => {
  const AppPreference = sequelize.define('AppPreference', {
    preferencesID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      unique: true
    },
    preferredUnits: {
      type: DataTypes.STRING,
    },
    notificationEmail: {
      type: DataTypes.BOOLEAN,
    },
    notificationPhone: {
      type: DataTypes.BOOLEAN,
    },
    notificationPreference: {
      type: DataTypes.STRING,
    },
    electricRate: {
      type: DataTypes.INTEGER,
    }
  },{
    hooks: {
    }
  })

  AppPreference.associate = (models) => {
    AppPreference.belongsTo(models.User)
    models.User.hasOne(AppPreference)
  }

  return AppPreference
}
