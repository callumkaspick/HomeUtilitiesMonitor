const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async changeUsername (req, res) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'Username does not exist'
        })
      }

      //Todo -
      //Add check if newUsername is already in use

      user.username = body.newUsername
      await user.save()
      console.log(user.username +' was changed to ' + user.username)

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        username: body.username,
        newUsername: body.newUsername
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to change username'
      })
    }
  },
  async changeEmail (req, res) {
    try {
      const body = req.body

      //Get the user by username
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'Username does not exist'
        })
      }

      user.email = body.newEmail
      await user.save()
      console.log(user.email +' was changed to ' + body.newEmail)

      const userJson = user.toJSON()
      res.send({
        user: userJson,
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to change email'
      })
    }
  },
  async changePassword (req, res) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'Username does not exist'
        })
      }
      console.log(user.password +' was changed to ' + body.newPassword)

      user.password = body.newPassword

      //Runs UPDATE which should invoke hook to hash users password
      await user.save()
      

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        username: body.username,
        newUsername: body.newUsername
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to change password'
      })
    }
  }
}