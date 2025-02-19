describe("shortcut keys",()=>
{
    it("verifying the keyboard keys ",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#name").type('bala', { shift: true });

        cy.get("#email").type("bala@gmail.com")
        cy.get("#email").type('{backspace}')

        cy.get("#email")
        .type("bala@gmail.com") 
        .type('{leftarrow}'.repeat(7)) 
        .type('{backspace}'); 


        cy.get("#phone").type("87965432")

        cy.get("#phone").type('{backspace}')



          


    })
})