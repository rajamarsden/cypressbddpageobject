import HeaderComponent from '../components/header.comp'
import MenuComponent from '../components/menu.comp'

class ConfirmationPage{
get lblconfirmtitle(){ return cy.get("h2[class='complete-header']")}

clickLogOut(){
    HeaderComponent.selectMenu()
    MenuComponent.clickLogOut()
}

}
export default new ConfirmationPage()
