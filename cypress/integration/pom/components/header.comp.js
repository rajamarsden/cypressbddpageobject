class HeaderComponent{
get iconcart(){ return cy.get("a[class='shopping_cart_link fa-layers fa-fw']")}
get iconmenu(){ return cy.get("div[class='bm-burger-button'] button")}

selectCart(){
 this.iconcart.click()
}
selectMenu(){
    this.iconmenu.click()
}


}
export default new HeaderComponent()