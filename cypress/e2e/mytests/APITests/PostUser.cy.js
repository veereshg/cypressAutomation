

describe ('post user request',()=>{
   
    let accesstoken='4acdcdeb97f0f7c44b955c678566663bee8712c6d854a41970e57d893f0b2f4e'

    it('create user' ,()=>{

        cy.fixture('createUser').then((payload) =>{
     // 1. create user (POST)
        cy.request({
            method :'POST',
            url :'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' : "Bearer " +accesstoken
            },
            body :{
                    "name": payload.name,
                    "email": payload.email,
                    "gender": payload.gender,
                    "status": payload.status
                  }

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email', payload.email),
            expect(res.body).has.property('name',payload.name)
        })



    })

})
})