const {User} = require('../models')
const {WaterDevice} = require('../models')
const {ElectricDevice} = require('../models')
const config = require('../config/config')

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
      await WaterDevice.create({
        UserUserID: user.userID})
      console.log("added water device")
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
      await ElectricDevice.create({
        UserUserID: user.userID})
      console.log("added electric device")
      const electricDevice = await ElectricDevice.findOne({
        where: {
          UserUserID: user.userID
        }
      })
      console.log("found device with correct userID")
      const electricDeviceJSON = electricDevice.toJSON()
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
}