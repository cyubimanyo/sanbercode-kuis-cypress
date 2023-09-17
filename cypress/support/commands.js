Cypress.Commands.add('login', (email, password) => {
    cy.get('#Email').should('be.visible').type(email)
    cy.get('#Password').should('be.visible').type(password)
    cy.get('form > .buttons > .button-1').should('be.visible').click()
    cy.contains(email).should('be.visible')
    cy.contains('Log out').should('be.visible')
    cy.log('Login Berhasil')
  })