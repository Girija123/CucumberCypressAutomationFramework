export default class BasePage{
    baseUrl = Cypress.env('baseUrl');

    navigate(path){
        cy.visit(this.baseUrl+path,{timeout:30000})
    };
}