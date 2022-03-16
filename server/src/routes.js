const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ChangeController = require('./controllers/ChangeController')
const isAuthenticated = require('./policies/isAuthenticated')
const TestController = require('./controllers/TestController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
  app.post('/newUsername',
    ChangeController.changeUsername)
  app.get('/user/:username',
    TestController.getUser)
  app.get('/getResponse',
    TestController.getResponse)  
}
