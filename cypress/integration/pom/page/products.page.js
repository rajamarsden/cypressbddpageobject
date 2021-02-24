class ProductsPage{
 get fleeceJacket(){ return cy.contains('Sauce Labs Fleece Jacket')}

 getUrl(){
     return cy.url()
 }

 selectFleecejacket(){
     this.fleeceJacket.click()
 }
}
export default new ProductsPage()