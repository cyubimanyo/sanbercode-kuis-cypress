describe('Login with 3 Test Cases', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Login with Valid Data', () => {
        // Read JSON file valid account
        cy.readFile('cypress/fixtures/accountValidRegister.json').then((account) => {
          cy.get('.ico-login').should('be.visible').click()
          cy.login(account.email, account.password)
          cy.log('Login Berhasil')
        })
      })
    
    it('Login with Random Data', () => {
      // Read JSON file random account
      cy.readFile('cypress/fixtures/randomRegister.json').then((account) => {
        cy.get('.ico-login').should('be.visible').click()
        cy.login(account.email, account.password)
        cy.log('Login Berhasil')
      })
    })

    it('Login with All Fields Blank and should validate field error messages', () => {
      cy.get('.ico-login').should('be.visible').click()
      cy.get('form > .buttons > .button-1').should('be.visible').click()
      cy.get('.validation-summary-errors').contains('Login was unsuccessful. Please correct the errors and try again.')
      cy.get('.validation-summary-errors').contains('No customer account found')
    })
})