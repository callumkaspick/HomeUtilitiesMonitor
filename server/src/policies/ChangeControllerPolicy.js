const Joi = require('@hapi/joi');

module.exports = {
  checkNewUsername (req, res, next) {
    const schema = Joi.object({
      newUsername: Joi.string().alphanum(),
      username: Joi.string().alphanum(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    })

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case 'newUsername':
          res.status(400).send({
            error: 'You must provide a valid new username'
          })
          break
        case 'username':
          res.status(400).send({
            error: 'You must provide a valid username'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  },
  checkNewEmail (req, res, next) {
    const schema = Joi.object({
      username: Joi.string().alphanum(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      newEmail: Joi.string().email(),
    })

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case 'newEmail':
          res.status(400).send({
            error: 'You must provide a valid new email'
          })
          break
        case 'username':
          res.status(400).send({
            error: 'You must provide a valid username'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  },
  checkNewPassword (req, res, next) {
    const schema = Joi.object({
      username: Joi.string().alphanum(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      newPassword: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
    })

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case 'newPassword':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br>
            1. It must contain ONLY the following characters: lower case, upper case, numerics.
            <br>
            2. It must be at least 8 characters in length and not greater than 32 characters in length.
          `
          })
          break
        case 'username':
          res.status(400).send({
            error: 'You must provide a valid username'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  },
  

}
