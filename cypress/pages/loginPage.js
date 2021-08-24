import BasePage from "./basePage";  


export default class LoginPage extends BasePage{
    constructor(){
        super();
    }

    usernameTxtField = '[data-test="username"]';
    passwordTxtField = '[data-test="password"]';
    loginBtn = '[data-test="login-button"]';

    typeUsernameAndPassword(username,password){
        cy.get(this.usernameTxtField).type(username);
        cy.get(this.passwordTxtField).type(password);    
    }

    clickLoginButton(){
        cy.get(this.loginBtn).click();
    }

}