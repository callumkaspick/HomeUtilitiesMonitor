import { mount } from '@cypress/vue'
import Register from './../RegisterView.vue'

describe('Register', () => {
  it('shouldnt be seen unless confirmed', () => {
    mount(Register)

    cy.get('#snackbar').should('not.be.visable')
  })
})