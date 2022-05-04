import Api from '@/services/Api'

export default {
  newUsername (credentials) {
    return Api().post('newUsername', credentials)
  },
  newPassword (credentials) {
    return Api().post('newPassword', credentials)
  },
  newEmail (credentials) {
    return Api().post('newEmail', credentials)
  },
  changeCircuitName (credentials) {
    return Api().post('changeCircuitName', credentials)
  },
  changeElectricRate (credentials) {
    return Api().post('changeElectricRate', credentials)
  }
}
