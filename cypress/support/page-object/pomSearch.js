class pomSearch {
    productFound(){
        cy.get('.product-grid').should('be.visible')
        cy.get('.product-title > a').should('be.visible')
    }

    errorLengthChar(){
        cy.get('.warning').should('be.visible')
        cy.contains('Search term minimum length is 3 characters')
    }

    productNotFound(){
        cy.get('.result').should('be.visible')
        cy.contains('No products were found that matched your criteria.')
    }

    viewPageList(){
        cy.get('#products-viewmode').select('List')
        cy.url().should('contains', 'viewmode=list')
    }

    viewPageGrid(){
        cy.get('#products-viewmode').select('Grid')
        cy.url().should('contains', 'viewmode=grid')
    }
}

export default new pomSearch()