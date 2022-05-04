const {User} = require('../models')
const {WaterDevice} = require('../models')
const {ElectricDevice} = require('../models')
const {CircuitName} = require('../models')
const config = require('../../config/config')
const {AppPreference} = require('../models')

module.exports = {
  async getWaterDevice (req, res) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })
      console.log("found user")
      const waterDevice1 = await WaterDevice.findOne({
        where: {
          UserUserID: user.userID
        }
      })
      console.log("found device with correct userID")
      const waterDeviceJSON = waterDevice1.toJSON()
      console.log(waterDeviceJSON)
      res.send({
        waterDevice: waterDeviceJSON
      })

    } catch (err) {
      res.status(500).send({
        error: 'An error has occured getting water device'
      })
    }
  },
  async getElectricDevice (req, res) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })
      console.log("found user")
      const electricDevice1 = await ElectricDevice.findOne({
        where: {
          UserUserID: user.userID
        }
      })
      console.log("found elec device with correct userID")
      const electricDeviceJSON = electricDevice1.toJSON()
      console.log(electricDeviceJSON)
      res.send({
        electricDevice: electricDeviceJSON
      })

    } catch (err) {
      res.status(500).send({
        error: 'An error has occured getting electric device'
      })
    }
  },
  async getWaterRate (req, res) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })
      const userID = user.userID
      const waterDevice = await WaterDevice.findOne({
        where: {
          UserUserID: userID
        }
      })
      const waterDeviceJSON = waterDevice.toJSON
      res.send({
        waterDevice: waterDeviceJSON
      })

    } catch (err) {
      res.status(500).send({
        error: 'An error has occured getting water device'
      })
    }
  },
  async getElectricRate (req, res) {
    try {
      const body = req.body
      const user = await User.findOne({
        where: {
          username: body.username
        }
      })
      const userID = user.userID
      const appPreferencce = await AppPreference.findOne({

        where: {
          UserUserID: userID
        }
      })
      res.send({
        electricRate: appPreferencce.electricRate
      })

    } catch (err) {
      res.status(500).send({
        error: 'An error has occured getting electric device'
      })
    }
  },
  async getCircuitNameArray (req, res) {
    try {
      const body = req.body
      const user = await User.findOne({
          where: {
              username: body.username
          }
      })
      console.log("found user")
      
      const electricDevice = await ElectricDevice.findOne({
          where: {
              UserUserID: user.userID
          }
      })
      console.log("found device with correct userID")
      console.log(electricDevice.dataValues.electricDeviceID)
  
      const circuitNames = await CircuitName.findAll({
          where: {
              ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
              circuitID: [1,2,3,4,5,6,7,8],
          },
          attributes: ['givenName'],
          raw: true
      })
      .then(seconds => seconds.map(seconds => seconds.givenName));
      console.log("found an array of circuit names")
      console.log(circuitNames)

      

      res.send({
        circuitNames: circuitNames,
      })

    } 
    catch (err) {
      res.status(500).send({
          error: 'An error has occured getting mock electric seconds device'
      })
    }
  },
  
}
