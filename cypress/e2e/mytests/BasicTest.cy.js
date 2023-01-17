describe('Basic Login',function(){

    it('Basic Login',()=>{

        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('qaboxletstest@gmail.com')
        cy.get('input[type="password"]').type('password123')
        cy.get('button[type="submit"]').click()
        cy.contains('No articles are here... yet.').should('be.visible')

    })

})