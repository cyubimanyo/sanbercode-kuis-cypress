import pomRegister from "../../support/page-object/pomRegister";

describe('Register with n Test Cases', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Register Normal', () => {
    cy.get('.ico-register').should('be.visible').click()

    // Generate random string
    const gender = pomRegister.anyGender();
    const firstName = pomRegister.generateRandomString(8);
    const lastName = pomRegister.generateRandomString(8);
    const email = lastName + '@mailnesia.com';
    const password = pomRegister.generateRandomString(8);

    cy.get('#gender-' + gender).should('be.visible').click()
    cy.get('#FirstName').should('be.visible').type(firstName)
    cy.get('#LastName').should('be.visible').type(lastName)
    cy.get('#Email').should('be.visible').type(email)
    cy.get('#Password').should('be.visible').type(password)
    cy.get('#ConfirmPassword').should('be.visible').type(password)
    cy.get('#register-button').should('be.visible').click()
    cy.get('.result').should('be.visible')

    // Save the credentials to a JSON file
    cy.writeFile('cypress/fixtures/randomRegister.json', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
  })
  
})