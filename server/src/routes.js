const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ChangeController = require('./controllers/ChangeController')
const isAuthenticated = require('./policies/isAuthenticated')
const TestController = require('./controllers/TestController')
const ChangeControllerPolicy = require('./policies/ChangeControllerPolicy')
const GetController = require('./controllers/GetController')
const GetUsagesController = require('./controllers/GetUsagesController')
const MockDataController = require('./controllers/MockDataController')

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
  app.post('/getWaterDevice',
    AuthenticationController.checkLogin,
    GetController.getWaterDevice,
  )
  app.post('/getElectricDevice',
    AuthenticationController.checkLogin,
    GetController.getElectricDevice,
  )
  app.post('/getWaterRate',
    AuthenticationController.checkLogin,
    GetController.getWaterRate,
  )
  app.post('/getElectricRate',
    GetController.getElectricRate,
  )
  app.post('/getLastMinuteInSeconds',
    AuthenticationController.checkLogin,
    GetUsagesController.getLastMinuteInSeconds,
  )
  app.post('/getLastHourInMinutes',
    AuthenticationController.checkLogin,
    GetUsagesController.getLastHourInMinutes,
  )
  app.post('/initMockData',
    MockDataController.init,
  )
  app.post('/initElectricDeviceMockData',
    MockDataController.addNewElectricDevice,
  )
  app.post('/initWaterDeviceMockData',
    MockDataController.addNewWaterDevice,
  )
  app.post('/getLastMinuteInSecondsWithCircuit',
    GetUsagesController.getLastMinuteInSecondsForCircuit,
  )
  app.post('/getCircuitDropdownOptions',
    GetUsagesController.getCircuitDropdownOptions,
  )
  app.post('/changeCircuitName',
    ChangeController.changeCircuitName,
  )
  app.post('/getCircuitNameArray',
    GetController.getCircuitNameArray,
  )
  app.post('/changeElectricRate',
    ChangeController.changeElectricRate,
  )

  
  
}
