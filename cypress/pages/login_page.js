/// <reference types="cypress"/>  

export class LoginPage{

    LoginPage_username = '#uname'
    LoginPage_password = '#pwd'
    LoginPage_loginBUtton = '[type="submit"]'

    navigate(url){
        cy.visit(url);

    }

    enterUsername(username){
        cy.get(this.LoginPage_username).type(username)

    }

    enterUserPassword(password){
        cy.get(this.LoginPage_password).type(password)

    }

    clickLogin(){
        cy.get(this.LoginPage_loginBUtton).click()

    }

}