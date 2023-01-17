import LoginPage from "../PageObjects/LoginPage.js";

describe('Login',{tags: ['Smoke']},()=>{

    // Login Test
             it('Login Test',() =>{
                cy.visit("https://opensource-demo.orangehrmlive.com/")

                cy.fixture('orangehrm').then((data) =>{
                    const loginpage=new LoginPage();
                    loginpage.setUserName(data.username)
                    loginpage.setPassword(data.password)
                    loginpage.clickSubmit();
                    loginpage.verifyLogin();

                })         
        
            })
})