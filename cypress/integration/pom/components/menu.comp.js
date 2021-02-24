class MenuComponent{
    get lnklogout(){return cy.get('#logout_sidebar_link')}
    
    clickLogOut(){
        this.lnklogout.click()
    }
}

export default new MenuComponent()
