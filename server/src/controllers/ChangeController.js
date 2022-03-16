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
          error: 'The login information was incorrect - No user'
        })
      }
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
  }
}