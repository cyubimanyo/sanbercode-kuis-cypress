class pomRegisterValidationError {
    get fieldValidationError() {
      return cy.get('.field-validation-error').should('be.visible');
    }
  
    validateFieldErrorMessage(field, errorMessage) {
      this.fieldValidationError.contains(`${field} ${errorMessage}.`);
    }
  }
  
  export default new pomRegisterValidationError()
  