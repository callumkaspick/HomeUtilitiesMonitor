import { mount } from '@vue/test-utils'
import Settings from './../../src/views/SettingsView.vue'

describe('Settings', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof Settings.data).toBe('function')
    })
})

describe('Mounted App', () => {
    const wrapper = mount(Settings);
  
    test('does a wrapper exist', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('Settings')
    })

    it('has a v-btn', () => {
        expect(wrapper.find('v-btn').exists()).toBe(true)
    })

    test('account settings press actually calls register()', async () => {
      const button = wrapper.find('#accountSettings')
      const spy = jest.spyOn(wrapper.vm, 'accountSettings')
      button.trigger('click')
      await wrapper.vm.$nextTick()
      expect(spy).toHaveBeenCalled()
    })
    test('device settings press actually calls register()', async () => {
      const button = wrapper.find('#deviceSettings')
      const spy = jest.spyOn(wrapper.vm, 'deviceSettings')
      button.trigger('click')
      await wrapper.vm.$nextTick()
      expect(spy).toHaveBeenCalled()
    })
    test('notification settings press actually calls register()', async () => {
      const button = wrapper.find('#notificationSettings')
      const spy = jest.spyOn(wrapper.vm, 'notificationSettings')
      button.trigger('click')
      await wrapper.vm.$nextTick()
      expect(spy).toHaveBeenCalled()
    })
    

})