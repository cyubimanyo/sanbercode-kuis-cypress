describe('Login with n Test Cases', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with Valid Data', () => {
      // Read JSON file valid account
      cy.readFile('cypress/fixtures/validRegister.json').then((account) => {
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
})