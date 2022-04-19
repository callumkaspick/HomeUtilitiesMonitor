import Api from '@/services/Api'

export default {
  initMockData (credentials) {
    return Api().post('initMockData', credentials)
  },
  initElectricDeviceMockData (credentials) {
    return Api().post('initElectricDeviceMockData', credentials)
  },
  initWaterDeviceMockData (credentials) {
    return Api().post('initWaterDeviceMockData', credentials)
  },
}
