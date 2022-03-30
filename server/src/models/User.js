const AppPreference = require('./AppPreference')
const WaterDevice = require('./WaterDevice')
const ElectricDevice = require('./ElectricDevice')


const Promise = require('bluebird')
const { sequelize } = require('.')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  User.associate = (models) => {
    User.hasOne(models.AppPreference)
    models.AppPreference.belongsTo(User)
    User.hasOne(models.WaterDevice)
    models.WaterDevice.belongsTo(User)
    User.hasOne(models.ElectricDevice)
    models.ElectricDevice.belongsTo(User)
  }

  

  return User
}
