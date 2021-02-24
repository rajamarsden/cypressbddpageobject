class CartPage{
    get lblprice(){ return cy.get("div[class='inventory_item_price']") }
    get btncheckout() { return cy.get("a[class='btn_action checkout_button']")}

    clickCheckout(){
        this.storeCartPrice()
        this.btncheckout.click()
    }

    storeCartPrice(){
        this.lblprice.then($ele=>{
            cy.wrap($ele.text()).as('cartprice')
        })
    }

}
export default new CartPage()


