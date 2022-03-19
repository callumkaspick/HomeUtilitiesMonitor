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
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This username is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect - No user'
        })
      }

      const isPasswordValid = await user.comparePassword(body.password)
      if (isPasswordValid) {
        return res.status(403).send({
          error: isPasswordValid + body.password + user.username
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
      console.log('hello error')
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  },
  async checkLogin (req, res, next) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect - No user'
        })
      }

      const isPasswordValid = await user.comparePassword(body.password)
      if (isPasswordValid) {
        return res.status(403).send({
          error: isPasswordValid + body.password + user.username
        })
      }

      const userJson = user.toJSON()
      next()
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  },
  async checkLoginNewUsername (req, res, next) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.oldUsername
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect - No user'
        })
      }

      const isPasswordValid = await user.comparePassword(body.password)
      if (isPasswordValid) {
        return res.status(403).send({
          error: isPasswordValid + body.password + user.username
        })
      }

      const userJson = user.toJSON()
      next()
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  },
  async checkLoginNewPassword (req, res, next) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect - No user'
        })
      }

      const isPasswordValid = await user.comparePassword(body.oldPassword)
      if (isPasswordValid) {
        return res.status(403).send({
          error: isPasswordValid + body.oldPassword + user.username
        })
      }

      const userJson = user.toJSON()
      next()
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
