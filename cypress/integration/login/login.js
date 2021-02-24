import {When} from 'cypress-cucumber-preprocessor/steps'
import ConfirmationPage from '../pom/page/confirmation.page'

When('I logout',()=>{
ConfirmationPage.clickLogOut()

})