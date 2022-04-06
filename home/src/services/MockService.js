import Api from '@/services/Api'

export default {
  initMockData (credentials) {
    return Api().post('initMockData', credentials)
  }
}
