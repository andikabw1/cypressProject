/// <reference types="cypress"/>  

import {signUpPage} from '../pages/Cermati'

const SignUpPage = new signUpPage()


describe('Test Login', () => {
    it ('Test daftar', () => {
        SignUpPage.navigate('https://www.cermati.com/app/gabung')
        cy.screenshot('halaman daftar')
        SignUpPage.enterEmail('andikasqacandidate2@mailinator.com')
        SignUpPage.enterMobilePhone('085124568793')
        SignUpPage.enterPassword('Delapancaract3r')
        SignUpPage.enterConfirmPassword('Delapancaract3r')
        SignUpPage.enterFirstName('test pendaftaran')
        SignUpPage.enterLastName('cermati')
        SignUpPage.enterCity('kabupaten semarang')
        cy.screenshot('data pendaftaran')
        SignUpPage.clickRegister()

        cy.screenshot('request opt code')

    })
});