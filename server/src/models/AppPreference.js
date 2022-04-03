const User = require('./User')

module.exports = (sequelize, DataTypes) => {
  const AppPreference = sequelize.define('AppPreference', {
    preferencesID: {
      type: DataTypes.STRING,
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
