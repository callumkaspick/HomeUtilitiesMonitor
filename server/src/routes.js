const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ChangeController = require('./controllers/ChangeController')
const isAuthenticated = require('./policies/isAuthenticated')
const TestController = require('./controllers/TestController')
const ChangeControllerPolicy = require('./policies/ChangeControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  app.post('/newUsername',
    AuthenticationController.checkLoginNewUsername,
    ChangeControllerPolicy.checkNewUsername,
    ChangeController.changeUsername,
    AuthenticationController.login)
  app.post('/newEmail',
    AuthenticationController.checkLogin,
    ChangeControllerPolicy.checkNewEmail,
    ChangeController.changeEmail,
    AuthenticationController.login)
  app.post('/newPassword',
    AuthenticationController.checkLoginNewPassword,
    ChangeControllerPolicy.checkNewPassword,
    ChangeController.changePassword,
    AuthenticationController.login)

}
