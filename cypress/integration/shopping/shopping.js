import { When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import ProductPage from '../pom/page/product.page'
import ProductsPage from '../pom/page/products.page'
import CartPage from '../pom/page/cart.page'
import ConfirmationPage from '../pom/page/confirmation.page'
import ReviewPage from '../pom/page/review.page'
import PersonalInfoPage from '../pom/page/personalinfo.page'



When('I add fleece to the cart', () => {
    ProductsPage.selectFleecejacket()
    ProductPage.clickAddtocart()
    ProductPage.btnremove.should('be.visible')

})

And('I checkout the product', () => {
    ProductPage.chooseCart()
    CartPage.clickCheckout()

})

Then('I see the cart price should match with the product price', () => {
    cy.get('@price').then((productprice) => {
        cy.get('@cartprice').then((cartprodprice) => {
            expect(productprice).to.contain(cartprodprice)
        })
    })
})
When('I submit personal infirmation', () => {
    PersonalInfoPage.submitPersonalinfo()

})
And('I confirmed the product', () => {
    ReviewPage.clickFinish()
})
Then('I should be on order confirmation', () => {
    ConfirmationPage.lblconfirmtitle.should('contain', 'THANK YOU FOR YOUR ORDER')
})

When('I logout from order confirmation', () => {
    ConfirmationPage.clickLogOut()
})

