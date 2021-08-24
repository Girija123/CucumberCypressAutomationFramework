import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import BasePage from "../../pages/basePage";
import LoginPage from "../../pages/loginPage";
import ProductPage from "../../pages/productPage";


const basePage = new BasePage();
const loginPage = new LoginPage();
const productPage = new ProductPage();

Given('I am on home page', () => {
    basePage.navigate('');

});

When('I enter username {string} and password {string}', (username, password) => {
    loginPage.typeUsernameAndPassword(username, password)
});

And('I click login button', () => {
    loginPage.clickLoginButton();
});

Then('I should login successfully and get redirected to products page', () => {
    productPage.verifyProductPageTitle();
});