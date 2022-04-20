import Api from '@/services/Api'

export default {
  getWaterDevice (credentials) {
    return Api().post('getWaterDevice', credentials)
  },
  getElectricDevice (credentials) {
    return Api().post('getElectricDevice', credentials)
  },
  getWaterRate (credentials) {
    return Api().post('getWaterRate', credentials)
  },
  getElectricRate (credentials) {
    return Api().post('getElectricRate', credentials)
  },
  getCircuitNameArray (credentials) {
    return Api().post('getCircuitNameArray', credentials)
  },
  
}
