/// <reference types ="Cypress" />

describe('get api user tests',()=>{
let accesstoken='4acdcdeb97f0f7c44b955c678566663bee8712c6d854a41970e57d893f0b2f4e'
    
    it ('get users',()=>{

        cy.request({
            method :'GET',
            url :'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' :"Bearer " +accesstoken
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)

        })
    })

    it ('get users by id',()=>{

        cy.request({
            method :'GET',
            url :'https://gorest.co.in/public/v2/users/3706',
            headers : {
                'authorization' :"Bearer " +accesstoken
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Gangesh Adiga PhD')

        })
    })
})