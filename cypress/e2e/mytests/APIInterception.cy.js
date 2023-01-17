describe('intercept with cypress example',()=>{

    it('test api with simple intercept',()=>{

        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept({
         path:'/posts'
        }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        } )

    })

    it('mocking with intercept test with static response',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/').as('posts')
        cy.intercept('GET','/posts',{totalposts:5,name:'veeresh'})
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })

    it.('mocking with intercept test with dynamic fixture',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/').as('posts')
        cy.intercept('GET','/posts',{fixture:'orangehrm.json'})
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')
    })
})