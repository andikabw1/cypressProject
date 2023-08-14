/// <reference types="cypress"/>  

it('learnig assertion', function(){
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    //implixit

    cy.get('#query-btn')
    .should('contain', 'Button')
    .should('have.class', 'query-btn')
    .should('be.visible')
    .should('be.enabled')

    cy.get('#query-btn').invoke('attr','id')
        .should('equal', 'query-btn')
      
    cy.get('#query-btn') 
        .should('contain', 'Button')   
        .and('have.class', 'query-btn') 

    //explicit asertion
    //expect  
     let name = 'andika'

     expect(name).to.be.equal('andikabw')

    assert.equal(4,4, 'equal')

})