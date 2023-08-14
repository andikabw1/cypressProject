/// <reference types="cypress"/>  

export class signUpPage{
    //signUpPage_username = "";
    signUpPage_email = "#email";
    signUpPage_mobilePhone = "#mobilePhone";
    signUpPage_firstName = "#firstName";
    signUpPage_lastName = "#lastName";
    signUpPage_password = "#password";
    signUpPage_confirmPassword = "#confirmPassword";
    signUpPage_city = "#cityAndProvince";
    signUpPage_registerButton = ".RegistrationForm_form-container__button-text__2C52j";
    signUpPage_formTitle = ".header_2xOrt";
    signUpPage_otpRequest = ".OtpForm_form-header__3aS9S"




    navigate(url){
        cy.visit(url);
        cy.wait(5000)
        cy.get('.header_2xOrt').should('be.visible', true)

    }
    
    enterEmail(email){
        cy.get(this.signUpPage_email).type(email);

    }

    enterMobilePhone(mobilePhone){
        cy.get(this.signUpPage_mobilePhone).type(mobilePhone);

    }

    enterFirstName(firstName){
        cy.get(this.signUpPage_firstName).type(firstName);

    }

    enterLastName(lastName){
        cy.get(this.signUpPage_lastName).type(lastName)

    }

    enterPassword(password){
        cy.get(this.signUpPage_password).type(password);

    }

    enterConfirmPassword(confirmPassword){
       cy.get(this.signUpPage_confirmPassword).type(confirmPassword)

    }

    enterCity(cityAndProvince){
        cy.get(this.signUpPage_city).type(cityAndProvince)
        cy.wait(5000)
        cy.get(this.signUpPage_city).type('{enter}')

    }

    clickRegister(){
        cy.get(this.signUpPage_registerButton).click();
        cy.wait(5000)
        cy.get(this.signUpPage_otpRequest).should('be.visible', true)

    }
    
}