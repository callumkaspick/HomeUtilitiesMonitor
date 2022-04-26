import { mount } from '@vue/test-utils'
import Login from './../../src/views/LoginView.vue'

describe('Login', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof Login.data).toBe('function')
    })
})

describe('Mounted App', () => {
    const wrapper = mount(Login, {
        propsData: {
          username: 'username',
          password: 'password',
        }
      });
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('Login')
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('username')
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('password')
    })

    it('trouble signing in?', () => {
        expect(wrapper.html()).toContain('password')
    })

    it('has a v-btn', () => {
        expect(wrapper.find('v-btn').exists()).toBe(true)
    })

    
})

describe('Mounted App', () => {
  const wrapper = mount(Login, {
      propsData: {
        username: 'username',
        password: 'password',
      }
    });

    test('button press actually calls login()', async () => {
      const button = wrapper.find('#loginButton')
      const spy = jest.spyOn(wrapper.vm, 'login')
      button.trigger('click')
      await wrapper.vm.$nextTick()
      expect(spy).toHaveBeenCalled()
    })
  
})



