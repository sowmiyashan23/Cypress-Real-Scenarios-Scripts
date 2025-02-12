import 'cypress-iframe';  
describe("chatbot functionality",()=>
{
    it("live chat",()=>
    {
        cy.visit("https://www.chatbot.com/")
        cy.get(".c-btn.v--signup.v--sm[href='https://accounts.livechat.com/signup?client_id=92418ea187dd3c572383cbf56f015b6c&response_type=token&redirect_uri=https%3A%2F%2Fapp.chatbot.com%2Fstories%3Fsource_id%3Dheader_cta&source_url=https%3A%2F%2Fwww.chatbot.com%2F&source_type=website&landing_page=https%253A%252F%252Fwww.chatbot.com%252F']").click({force:true})
        cy.get("input[placeholder='John Smith']").type("preethi")
        cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").type("bala02aadhikesavan@gmail.com")
        cy.get("input[placeholder='Enter your password']").type("08765447")
        cy.get('[data-testid="create-account-button"]').click()
        cy.get('#sign-in-password-field').type("08765447")
        cy.get('[data-testid="login-form-button"]').click()
        for(let i =1;i<=3;i++)
        {
            cy.go('back')
        }
       cy.frameLoaded("#chat-widget-minimized")
       cy.iframe("chat-widget-minimized")
        .find('div[class="lc-1k5qu9y e1016sln0"]>div>textarea').type("hello{enter}")



    })
    it.only("another website",()=>
    {
        cy.visit("https://app.chatbot.com/dashboard/67ac3d856bf7f600076ddd71/")
        //cy.get("#tidio-chat-iframe").click()
        cy.get(':nth-child(1) > :nth-child(1) > .lc-FormField-module__form-field__content___7Cnwe > :nth-child(1) > .lc-Typography-module__paragraph-md___Ogs8k').type("bala02aadhikesavan@gmail.com")
        cy.get('#sign-in-password-field').type("08765447")
        cy.get('[data-testid="login-form-button"]').click(); 
        cy.get('.tpl-livechat-button').click(); 
        cy.wait(2000);
        cy.pause() 
        cy.get("#chat-widget").its('0.contentDocument.body').then((body) => {
        cy.wrap(body).find('div[class="lc-1k5qu9y e1016sln0"]>div>textarea').type("hai{enter}");
        });
        cy.wait(5000)
        cy.get("#chat-widget").its('0.contentDocument.body').then((body) => {
            cy.wrap(body).find('div[class="lc-1n5mfq1 eyglfwq0"]').type("include.text","Hi, nice to see you here. How can I help you?");
            });


    })
    
}) 