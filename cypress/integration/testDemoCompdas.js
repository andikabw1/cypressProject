/// <reference types="cypress"/>  

describe('test pertama',()=>{
    it('login', ()=>{
       cy.visit('https://company.myrobin.tech/login');
       cy.get(':nth-child(1) > .uk-inline > h3')
       .should('contain', 'Email')
       cy.screenshot('loginMabes_Page')

       cy.get(':nth-child(1) > .uk-inline > .uk-input').type('superadmin@sqaandikacomp.id')
       cy.get(':nth-child(2) > .uk-inline > .uk-input').type('password')
       
       cy.screenshot('loginMabes_Page_2')
       cy.get('.uk-button').click()

       cy.get('.sidebar > .uk-nav-default > :nth-child(1) > .router-link-exact-active')
       .should('contain', 'Dashboard')

       cy.screenshot('loginMabes_Page_3')

    });

    it('access candidate page', ()=> {
        cy.get(':nth-child(4) > a').click()
        //cy.get('b').should('contain', 'Candidate')
        cy.screenshot('candidate_Page_3')
        


    })

    it('filter candidate name', ()=> {
        cy.get('.uk-first-column > .uk-input').type('sqa andika candidate{enter}')
        cy.get('.uk-first-column > .uk-input').should('contain', 'sqa andika candidate')
        cy.screenshot('candidate_Page_4')

    })

    it('show candidate details', ()=> {
        cy.get(':nth-child(1) > .uk-grid > .uk-width-1-6 > :nth-child(3)').click()
        cy.get('#detailModal > .uk-modal-dialog > .uk-modal-header > .uk-modal-title').should('show',true)
        cy.screenshot('candidate_Page_5')

    })

})