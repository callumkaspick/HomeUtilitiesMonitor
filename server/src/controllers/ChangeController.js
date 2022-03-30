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
  async changeUsername (req, res, next) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.oldUsername
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'Username does not exist'
        })
      }

      //Todo -
      //Add check if newUsername is already in use

      user.username = body.username
      await user.save()

      const userJson = user.toJSON()

      next()
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to change username'
      })
    }
  },
  async changeEmail (req, res, next) {
    try {
      console.log('entered changeEmail in controller')
      const body = req.body

      //Get the user by username
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })

      //If user does not exist in database...
      if (!user) {
        return res.status(403).send({
          error: 'Username does not exist'
        })
      }

      //Change User's attribute
      user.email = body.newEmail

      //UPDATE the database
      await user.save()

      const userJson = user.toJSON()
      next()
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to change email'
      })
    }
  },
  async changePassword (req, res, next) {
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

      user.password = body.password

      //Runs UPDATE which should invoke hook to hash users password
      await user.save()
      

      const userJson = user.toJSON()

      next()
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to change password'
      })
    }
  }
}