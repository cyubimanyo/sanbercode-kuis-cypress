import pomRegister from "../../support/page-object/pomRegister";
import pomRegisterValidationError from "../../support/page-object/pomRegisterValidationError";

describe('Register with 3 Test Cases', () => {
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
  
  it('Register with All Fields Blank and should validate field error messages', () => {
    cy.get('.ico-register').should('be.visible').click()
    cy.get('#register-button').should('be.visible').click()

    // The error messages to be validated
    const errorMessages = {
      'First name': 'is required',
      'Last name': 'is required',
      'Email': 'is required',
      'Password': 'is required'
    };

    // Validate each field error message
    Object.entries(errorMessages).forEach(([field, errorMessage]) => {
      pomRegisterValidationError.validateFieldErrorMessage(field, errorMessage);
    });
  })

  it('Register with invalid Email and Password', () => {
    cy.get('.ico-register').should('be.visible').click()
    cy.get('#register-button').should('be.visible').click()

    cy.readFile('cypress/fixtures/invalidRegister.json').then((account) => {
      cy.get('.ico-register').should('be.visible').click()
      cy.register(account.firstName, account.lastName, account.email, account.password, account.confirmPassword)
      cy.log('Wrong email')
      cy.log('The password and confirmation password do not match.')
    })
  })
})