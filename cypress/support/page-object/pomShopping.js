class pomShopping {
    shoppingCategories(){
        cy.get('.list > :nth-child(4) > a').should('be.visible').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('#add-to-cart-button-5').click()
        cy.get('#bar-notification')
            .scrollIntoView()
            .should('be.visible')
            .contains('The product has been added to your')
            cy.get('a[href="/cart"]').should(($a) => {
                expect($a).to.contain('shopping cart')
              })
            .should('exist')
    }

    viewShoppingCart(){
        cy.get('.ico-cart > .cart-label').click()
        cy.get('.cart-item-row > .product').should('be.visible')
    }

    editProduct(){
        cy.get('.edit-item > a').click()
        cy.get('#addtocart_5_EnteredQuantity').clear()
        cy.get('#addtocart_5_EnteredQuantity').type('10')
        cy.get('#add-to-cart-button-5').click()
        cy.get('#bar-notification')
            .scrollIntoView()
            .should('be.visible')
            .contains('The product has been added to your')
            cy.get('a[href="/cart"]').should(($a) => {
                expect($a).to.contain('shopping cart')
              })
            .should('exist')
    }

    proceedCheckout(){
        cy.get('#CountryId').select('United States')
        cy.get('#StateProvinceId').select('California')
        cy.get('#termsofservice').click()
        cy.get('#checkout').click()
        cy.get('#billing-buttons-container > .button-1').click()
        cy.get('#shipping-buttons-container > .button-1').click()
        cy.get('#shippingoption_2').click()
        cy.get('#shipping-method-buttons-container > .button-1').click()
        cy.get('#payment-method-buttons-container > .button-1').click()
        cy.get('#payment-info-buttons-container > .button-1').click()
        cy.get('#confirm-order-buttons-container > .button-1').click()
        cy.contains('.section.order-completed', 'Your order has been successfully processed!').should('be.visible')
    }
}

export default new pomShopping()