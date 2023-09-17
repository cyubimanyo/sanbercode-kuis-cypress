Cypress.Commands.add('register', (firstName, lastName, email, password, confirmPassword) => {
  cy.get('.ico-register').should('be.visible').click()
  cy.get('#gender-male').should('be.visible').click()
  cy.get('#FirstName').should('be.visible').type(firstName)
  cy.get('#LastName').should('be.visible').type(lastName)
  cy.get('#Email').should('be.visible').type(email)
  cy.get('#Password').should('be.visible').type(password)
  cy.get('#ConfirmPassword').should('be.visible').type(confirmPassword)
  cy.get('#register-button').should('be.visible').click()
})

Cypress.Commands.add('login', (email, password) => {
    cy.get('#Email').should('be.visible').type(email)
    cy.get('#Password').should('be.visible').type(password)
    cy.get('form > .buttons > .button-1').should('be.visible').click()
    cy.contains(email).should('be.visible')
    cy.contains('Log out').should('be.visible')
})

Cypress.Commands.add('search', (search) => {
  cy.get('#small-searchterms').should('be.visible').clear().type(search)
  cy.get('form > .button-1').should('be.visible').click()
})