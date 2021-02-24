class personalInfoPage{
    get txtfirstname(){ return cy.get('#first-name') }
    get txtlastname(){ return cy.get('#last-name') }
    get txtpostcode(){ return cy.get('#postal-code')}
    get btncontinue(){ return cy.get("input[value='CONTINUE']")}

     submitPersonalinfo(){
         this.txtfirstname.type('raja')
         this.txtlastname.type('gali')
         this.txtpostcode.type('00000')
         this.btncontinue.click()

     }
}

export default new personalInfoPage()