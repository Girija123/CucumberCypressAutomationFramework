import BasePage from "./basePage";

export default class ProductPage extends BasePage{
    constructor(){
        super();
    }

    productPageTitle= '.title';

    verifyProductPageTitle(){
        cy.get(this.productPageTitle).should('be.visible')   
    
    }

}