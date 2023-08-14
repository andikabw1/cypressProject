/// <reference types="cypress"/>  

describe('test pertama', () => {
    it('google test', () => {
        cy.visit('https://google.com')
        //cy.screenshot('google_4')
        cy.get('.gLFyf').type('automation step by step{enter}')
        // cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()
       cy.wait(5000)
        cy.contains('Video').click()

    })

    it.only('demo login' , function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        // cy.get('#menu_admin_UserManagement').click()
        cy.get('#btnAdd').click()
        cy.wait(5000)
        cy.screenshot('Demo_login_1')
        cy.get('#btnSave').click()
        cy.wait(5000)
        cy.screenshot('Demo_login_2')


    })

});