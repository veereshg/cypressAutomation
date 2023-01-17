//before
//after
//beforeEach
//AfterEach


describe ('Hooksandtags',()=>{

before(()=>{
    cy.log("********* launch app***********");
})

after(()=>{
   cy.log("*********** close app **********");
})

it ('veeresh Test',{tags :'Sprint'}, ()=>{

    cy.log("********** searching  *************");
    expect(true).to.be.true

})

beforeEach(()=>{
    cy.log("**********Login *****************");
})

afterEach(()=>{
    cy.log("*************Logout ****************");
})

it('advanced search',()=>{

    cy.log("********** advanced searching  *************");

})

it.only('listing products',()=>{

    cy.log("********** listing products  *************");

})

})