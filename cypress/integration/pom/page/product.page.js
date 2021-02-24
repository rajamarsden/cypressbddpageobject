import HeaderComponent from '../components/header.comp'

class ProductPage{
 get btnaddtocart(){ return cy.get("button[class='btn_primary btn_inventory']")}
 get btnremove(){ return cy.contains('REMOVE')}

 get lblprice(){ return cy.get("div[class='inventory_details_price']")}

 clickAddtocart(){
     this.storePrice()
     this.btnaddtocart.click()
 }

 storePrice(){
     this.lblprice.then($ele=>{
         cy.wrap($ele.text()).as('price')
     })
 }

 chooseCart(){
     HeaderComponent.selectCart()
     
 }

}

export default new ProductPage()

