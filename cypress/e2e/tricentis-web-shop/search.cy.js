import pomSearch from "../../support/page-object/pomSearch"

describe('Search with 7 Test Cases', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    
    it('Search with Valid Minimum Character', () => {
        cy.search('lap')
        pomSearch.productFound()
    })

    it('Search with Invalid Minimum Character', () => {
        cy.search('x')
        pomSearch.errorLengthChar()
    })

    it('Search with Product Found', () => {
        cy.search('gift card')
        pomSearch.productFound()
    })

    it('Search No Product Found', () => {
        cy.search('gift card')
        pomSearch.productFound()
    })

    it('Search with View Page List', () => {
        cy.search('computer')
        pomSearch.productFound()
        pomSearch.viewPageList()
    })

    it('Search with View Page Grid', () => {
        cy.search('computer')
        pomSearch.productFound()
        pomSearch.viewPageList()
        pomSearch.viewPageGrid()
    })
})