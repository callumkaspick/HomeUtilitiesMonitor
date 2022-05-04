import { mount } from '@vue/test-utils'
import Register from './../../src/views/RegisterView.vue'

describe('Register', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof Register.data).toBe('function')
    })
})

describe('Mounted App', () => {
    const wrapper = mount(Register, {
        propsData: {
          username: 'username',
          email: 'email@email.com',
          password: 'password',
        }
      });
  
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

    it('registers an account with the DB and show no error', () => {
        wrapper.vm.register()
        expect(wrapper.vm.error).toEqual(null)
    })

})

describe('Mounted App can register', () => {
    const wrapper = mount(Register, {
        propsData: {
          username: 'newusername',
          email: 'email123.com',
          password: 'password',
        }
      });
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    test('button press actually calls register()', async () => {
        const button = wrapper.find('#registerButton')
        const spy = jest.spyOn(wrapper.vm, 'register')
        button.trigger('click')
        await wrapper.vm.$nextTick()
        expect(spy).toHaveBeenCalled()
    })

})