import Api from '@/services/Api'

export default {
  getLastMinuteInSeconds (credentials) {
    return Api().post('getWaterDevice', credentials)
  },
  getLastHourInMinutes (credentials) {
    return Api().post('getElectricDevice', credentials)
  },
  getLastDayInHours (credentials) {
    return Api().post('getWaterRate', credentials)
  },
  getLastWeekInDays (credentials) {
    return Api().post('getElectricRate', credentials)
  }
}
