const {User} = require('../models')
const {ElectricDevice} = require('../models')
const {ElectricSeconds} = require('../models')
const config = require('../config/config')
const {MockElectricSeconds} = require('../models')

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
            await ElectricDevice.create({
                UserUserID: user.userID})
            console.log("added electric device")
            const electricDevice = await ElectricDevice.findOne({
                where: {
                    UserUserID: user.userID
                }
            })
            console.log("found device with correct userID")
            console.log(electricDevice.dataValues.electricDeviceID)
            
            let dataArr = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,6,7,8,9,10,10,11,11,12,12,12,10,13,13,13,15,5,5,5,5,5,5,5,5,5,5,5,3,2,1,2,3,4,5,6,7,9,8,7,6,5,4,3,2,1]

            //create mock last 60 seconds
            for(let i = 1; i < 61; i++){
                await MockElectricSeconds.create({
                    data: dataArr[i-1],
                    date: i,
                    ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID
                })
            }
            console.log("inserted all mock data")
            const mockElectricSeconds = await MockElectricSeconds.findAll({
                where: {
                    ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID
                }
            })
            
            console.log(mockElectricSeconds.toJSON())
                
            console.log("found all mock entries matching device ID")
            const mockElectricSecondsJSON = mockElectricSeconds.toJSON()
            console.log(mockElectricSecondsJSON)
            res.send({
                mockElectricSeconds: mockElectricSecondsJSON
            })

        } catch (err) {
        res.status(500).send({
            error: 'An error has occured getting mock electric seconds device'
        })
    }
  },
}
