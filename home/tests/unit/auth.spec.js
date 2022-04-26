import { mount } from '@vue/test-utils'
import Vue from "vue"
import Register from './../../src/views/RegisterView.vue'


describe('Mounted App', () => {
    it('has data', () => {
        expect(typeof Register.data).toBe('function')
    })

    const wrapper = mount(Register);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('Register')
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('username')
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('password')
    })

    it('has a v-btn', () => {
        expect(wrapper.find('v-btn').exists()).toBe(true)
    })

})

async function register () {
    try {
        const response = await AuthenticationService.register({
          email: this.email,
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.snackbar = true
        //this.status = 'success'
        this.error = 'Success! Redirecting...'
        this.error = ''
        
      } catch (error) {
        this.error = error.response.data.error
      }
}


