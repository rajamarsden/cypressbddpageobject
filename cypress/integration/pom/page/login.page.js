class LoginPage{

    get txtusername() { return cy.get('#user-name')}
    get txtpassword() { return cy.get('#password')}
    get btnlogin() { return cy.get('#login-button')}
     
    openUrl(){
        cy.visit('https://www.saucedemo.com/')
    }
    
    getTitle(){
    return cy.title()
    }

  
    login(user,pass){
        this.txtusername.type(user)
        this.txtpassword.type(pass)
        this.btnlogin.click()
    }
}
export default new LoginPage()