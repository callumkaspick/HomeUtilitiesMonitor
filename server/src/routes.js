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
    ChangeControllerPolicy.checkNewUsername,
    ChangeController.changeUsername)
  app.post('/newEmail',
    ChangeControllerPolicy.checkNewEmail,
    ChangeController.changeEmail) 
  app.post('/newPassword',
    ChangeControllerPolicy.checkNewPassword,
    ChangeController.changePassword) 

}
