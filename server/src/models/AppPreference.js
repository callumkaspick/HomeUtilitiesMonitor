const sequelize = new Sequelize('sqlite::memory:')
const { BelongsTo } = require('sequelize/types')
const User = require('User')

module.exports = (sequelize, DataTypes) => {
  const AppPreference = sequelize.define('AppPreference', {
    preferencesID: {
      type: DataTypes.STRING,
      unique: true
    },
    preferredUnits: {
      type: DataTypes.STRING,
    },
    notificationEmail: {
      type: DataTypes.STRING,
    },
    notificationPhone: {
      type: DataTypes.STRING,
    },
    notificationPreference: {
      type: DataTypes.STRING,
    },
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  AppPreference.associate = function (models) {
    BelongsTo(User)
  }

  return AppPreference
}
