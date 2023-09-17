import pomShopping from "../../support/page-object/pomShopping"

describe('Shopping with n Test Cases', () => {
    beforeEach(() => {
        cy.visit('/')
      })
    
    it('Shopping Normal from Categories', () => {
      cy.readFile('cypress/fixtures/validRegister.json').then((account) => {
          cy.get('.ico-login').should('be.visible').click()
          cy.login(account.email, account.password)
        })
      pomShopping.shoppingCategories() 
      pomShopping.viewShoppingCart()
      pomShopping.proceedCheckout() 
    })

    it('Shopping Normal with Edit Product', () => {
        cy.readFile('cypress/fixtures/validRegister.json').then((account) => {
            cy.get('.ico-login').should('be.visible').click()
            cy.login(account.email, account.password)
          })
        pomShopping.shoppingCategories() 
        pomShopping.viewShoppingCart()
        pomShopping.editProduct()
        pomShopping.viewShoppingCart()
        pomShopping.proceedCheckout() 
      })
})