/// <reference types="cypress"/> 

describe('Testcase pertama', ()=>{
    it('akses halaman myrobin', ()=>{
        cy.visit('https://app.myrobin.tech/');
        cy.screenshot('pwa_page_1')
        cy.get('[data-testid=to-login] > img').click()
        cy.get('.text-primary').click()
        

    })
})