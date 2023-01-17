describe ('launch my app',()=> {
    it('Launch App',{tags:['Regression']},()=>{
        cy.visit('https://rlp-qa-ui.congacloud.io/cadmin/#/products')
        cy.get('div.sign-in-wrapper > cc-sign-in')
          .shadow()
          .find('cc-select[actionname="buttonMenu"')
          .shadow()
          .find('div[id="select-button"]')
          .click()
        cy.select('Salesforce').click()
    
    })
})