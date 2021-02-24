import { Given, When, Then,} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pom/page/login.page'
import ProductsPage from '../pom/page/products.page'

Given('I was on Sauce demo site', () => {
    LoginPage.openUrl()
})
When('I logged in with {string} {string}', (username, password) => {
    LoginPage.login(username, password)
})

Then('I should landed  in products page', () => {
    ProductsPage.getUrl().should('contain','/inventory.html')
})
Then('I should see the login page', () => {
    LoginPage.txtusername.should('be.visible')
})
