const {User} = require('../models')
const {ElectricDevice} = require('../models')
const {ElectricSeconds} = require('../models')
const config = require('../../config/config')
const {WaterDevice} = require('../models')
const {MockElectricSeconds} = require('../models')
const {MockElectricMinutes} = require('../models')
const {CircuitName} = require('../models')
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
            
            const electricDevice = await ElectricDevice.findOne({
                where: {
                    UserUserID: user.userID
                }
            })
            console.log("found device with correct userID")
            console.log(electricDevice.dataValues.electricDeviceID)
        

            var circuitID = body.circuit.charAt(0)
            if (circuitID != 'A'){
                const mockElectricSeconds = await MockElectricSeconds.findAll({
                    where: {
                        ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
                        date: [1,2,3,4,5,6,7,8,9,10,10, 11, 12, 13, 
                            14, 15, 16, 17, 18, 19,
                            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                            30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                            40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                            50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                            60],
                        circuitID: parseInt(circuitID)
                    },
                    attributes: ['date','data'],
                    raw: true
                })
                .then(seconds => seconds.map(seconds => [seconds.date, seconds.data]));
                console.log("found all mock entries matching device ID")
                console.log(mockElectricSeconds)
    
                
    
                res.send({
                    mockElectricSeconds: mockElectricSeconds,
                })
            }
            else {
                const mockElectricSeconds = await MockElectricSeconds.findAll({
                    where: {
                        ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
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
                console.log(mockElectricSeconds)
    
                
    
                res.send({
                    mockElectricSeconds: mockElectricSeconds,
                })
            }

        } catch (err) {
        res.status(500).send({
            error: 'An error has occured getting mock water seconds device'
        })
    }
  },
  async getLastMinuteInSecondsForCircuit (req, res) {
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
    
        const mockElectricSecondsWithCircuit = await MockElectricSeconds.findAll({
            where: {
                ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
                date: [1,2,3,4,5,6,7,8,9,10,10, 11, 12, 13, 
                    14, 15, 16, 17, 18, 19,
                    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                    60],
                circuitID: body.circuitID
            },
            attributes: ['date','data','circuitID'],
            raw: true
        })
        .then(seconds => seconds.map(seconds => [seconds.date, seconds.data]));
        console.log("found all mock entries matching device ID with circuit")
        console.log(mockElectricSecondsWithCircuit)

        

        res.send({
            mockElectricSecondsWithCircuit: mockElectricSecondsWithCircuit,
        })

    } catch (err) {
    res.status(500).send({
        error: 'An error has occured getting mock electric seconds device'
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
        
        const electricDevice = await ElectricDevice.findOne({
            where: {
                UserUserID: user.userID
            }
        })
        console.log("found device with correct userID")
        console.log(electricDevice.dataValues.electricDeviceID)
    
        var circuitID = body.circuit.charAt(0)
        if (circuitID != 'A'){
            const mockElectricMinutes = await MockElectricMinutes.findAll({
                where: {
                    ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
                    date: [1,2,3,4,5,6,7,8,9,10,10, 11, 12, 13, 
                        14, 15, 16, 17, 18, 19,
                        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                        50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                        60],
                    circuitID: parseInt(circuitID)
                },
                attributes: ['date','data'],
                raw: true
            })
            .then(minutes => minutes.map(minutes => [minutes.date, minutes.data]));
            console.log("found all mock entries matching device ID")
            console.log(mockElectricMinutes)
            res.send({
                mockElectricMinutes: mockElectricMinutes
            })
        }
        else{
            const mockElectricMinutes = await MockElectricMinutes.findAll({
                where: {
                    ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
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
            console.log(mockElectricMinutes)
            res.send({
                mockElectricMinutes: mockElectricMinutes
            })
        }       

    } catch (err) {
    res.status(500).send({
        error: 'An error has occured getting mock electric seconds device'
    })
}
},
async getLastHourInMinutesForCircuit (req, res) {
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
    
        const mockElectricSecondsWithCircuit = await MockElectricSeconds.findAll({
            where: {
                ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
                date: [1,2,3,4,5,6,7,8,9,10,10, 11, 12, 13, 
                    14, 15, 16, 17, 18, 19,
                    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                    60],
                circuitID: body.circuitID
            },
            attributes: ['date','data','circuitID'],
            raw: true
        })
        .then(seconds => seconds.map(seconds => [seconds.date, seconds.data]));
        console.log("found all mock entries matching device ID with circuit")
        console.log(mockElectricSecondsWithCircuit)

        

        res.send({
            mockElectricSecondsWithCircuit: mockElectricSecondsWithCircuit,
        })

    } catch (err) {
    res.status(500).send({
        error: 'An error has occured getting mock water minutes device'
    })
}
},
async getCircuitDropdownOptions (req, res) {
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
    
        const circuitData = await CircuitName.findAll({
            where: {
                ElectricDeviceElectricDeviceID: electricDevice.dataValues.electricDeviceID,
                circuitID: [1,2,3,4,5,6,7,8],
            },
            attributes: ['circuitID','givenName'],
            raw: true
        })
        .then(seconds => seconds.map(seconds => seconds.circuitID + ": " + seconds.givenName));
        console.log("found all circuit names")
        console.log(circuitData)

        

        res.send({
            circuitData: circuitData,
        })

    } catch (err) {
        res.status(500).send({
            error: 'An error has occured getting mock electric seconds device'
        })
    }
},
}
