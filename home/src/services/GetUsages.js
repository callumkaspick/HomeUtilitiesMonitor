import Api from '@/services/Api'

export default {
  getLastMinuteInSeconds (credentials) {
    return Api().post('getLastMinuteInSeconds', credentials)
  },
  getLastHourInMinutes (credentials) {
    return Api().post('getLastHourInMinutes', credentials)
  },
  getLastDayInHours (credentials) {
    return Api().post('getWaterRate', credentials)
  },
  getLastWeekInDays (credentials) {
    return Api().post('getElectricRate', credentials)
  }
}
