const {User} = require('../models')
const {ElectricDevice} = require('../models')
const {ElectricSeconds} = require('../models')
const {WaterDevice} = require('../models')
const config = require('../config/config')
const {MockElectricSeconds} = require('../models')
const {MockElectricMinutes} = require('../models')
const {MockWaterSeconds} = require('../models')
const {MockWaterMinutes} = require('../models')

module.exports = {
    async getLastMinuteInSeconds (req, res) {
        try {
            const body = req.body
            const user = await User.findOne({
                where: {
                    username: body.username
                }
            })
            console.log("found user")
            
            const waterDevice = await WaterDevice.findOne({
                where: {
                    UserUserID: user.userID
                }
            })
            console.log("found device with correct userID")
            console.log(waterDevice.dataValues.waterDeviceID)
        
            const mockWaterSeconds = await MockWaterSeconds.findAll({
                where: {
                    WaterDeviceWaterDeviceID: waterDevice.dataValues.waterDeviceID,
                    date: [1,2,3,4,5,6,7,8,9,10,10, 11, 12, 13, 
                        14, 15, 16, 17, 18, 19,
                        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                        50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                        60]
                },
                attributes: ['date','data'],
                raw: true
            })
            .then(seconds => seconds.map(seconds => [seconds.date, seconds.data]));
            console.log("found all mock entries matching device ID")
            console.log(mockWaterSeconds)
            res.send({
                mockWaterSeconds: mockWaterSeconds
            })

        } catch (err) {
        res.status(500).send({
            error: 'An error has occured getting mock water seconds device'
        })
    }
  },
  async getLastHourInMinutes (req, res) {
    try {
        const body = req.body
        const user = await User.findOne({
            where: {
                username: body.username
            }
        })
        console.log("found user")
        
        const waterDevice = await WaterDevice.findOne({
            where: {
                UserUserID: user.userID
            }
        })
        console.log("found device with correct userID")
        console.log(waterDevice.dataValues.waterDeviceID)
    
        const mockWaterMinutes = await MockWaterMinutes.findAll({
            where: {
                WaterDeviceWaterDeviceID: waterDevice.dataValues.waterDeviceID,
                date: [1,2,3,4,5,6,7,8,9,10,10, 11, 12, 13, 
                    14, 15, 16, 17, 18, 19,
                    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                    60]
            },
            attributes: ['date','data'],
            raw: true
        })
        .then(minutes => minutes.map(minutes => [minutes.date, minutes.data]));
        console.log("found all mock entries matching device ID")
        console.log(mockWaterMinutes)
        res.send({
            mockWaterMinutes: mockWaterMinutes
        })

    } catch (err) {
    res.status(500).send({
        error: 'An error has occured getting mock water minutes device'
    })
}
},
}
