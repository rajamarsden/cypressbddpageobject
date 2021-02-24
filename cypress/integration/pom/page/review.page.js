class ReviewPage{
 get btnfinish(){ return cy.get("a[class='btn_action cart_button']")}
 
 clickFinish(){
     this.btnfinish.click()
 }

}

export default new ReviewPage()
