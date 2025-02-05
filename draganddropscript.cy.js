describe("drag and drop test suite",()=>
{
    it("drag and drop",()=>
    {
        cy.visit("https://commitquality.com/practice-drag-and-drop")
        cy.get(".small-box ").drag(".large-box")
        cy.get(".large-box").should("have.text","Success!").and('have.css','background-color','rgb(170, 255, 170)')
    })
    it("drag and drop with real time application", () => {
        cy.visit("https://trello.com/b/k2U7aq8Z/remote-class-template");
        
        
        cy.get('[href="/login?returnUrl=%2Fb%2Fk2U7aq8Z%2Fremote-class-template"]').click();
        cy.get('[data-testid="username"]').type("bala02aadhikesavan@gmail.com");
        cy.get('#login-submit > .css-178ag6o').click();
        cy.get('[data-testid="password"]').type("bala02aadhi@18");
        cy.get('#login-submit > .css-178ag6o').click();
    
        
        cy.get('[data-list-id="67a2ec3fb08a43791e3f60ff"] > [data-testid="list"] > [data-testid="list-cards"] > :nth-child(3) > [data-testid="trello-card"]')
      .drag('[data-list-id="67a2ec3fb08a43791e3f60fe"] > [data-testid="list"] > [data-testid="list-cards"] > :nth-child(2) > [data-testid="trello-card"]',{force:true});
        
      cy.get('[data-list-id="67a2ec3fb08a43791e3f60fe"] > [data-testid="list"] > [data-testid="list-cards"] > :nth-child(1) > [data-testid="trello-card"] > .amUfYqLTZOvGsn')
        .drag('[data-list-id="67a2ec3fb08a43791e3f60ff"] > [data-testid="list"] > [data-testid="list-cards"] > :nth-child(2) > [data-testid="trello-card"] > .amUfYqLTZOvGsn',{force:true});
     
        
    
        cy.get("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ol:nth-child(1) > li:nth-child(4) > div:nth-child(1) > ol:nth-child(3) > li:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
    
        .drag("body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ol:nth-child(1) > li:nth-child(3) > div:nth-child(1) > div:nth-child(4) > button:nth-child(1)",{force:true})
    
    
    })



it("drag and drop using file upload ",()=>
{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#drag-drop-upload").selectFile("cypress/fixtures/downloaded_file.pdf",{

        action:'drag-drop'

    })
    cy.get("#drag-drop-upload").selectFile("cypress/fixtures/logo-title.png",{

        action:'drag-drop'

    })
})
it("drag and drop ",()=>
{
    cy.visit("https://vishalok12.github.io/jquery-dragarrange/")
    cy.get(".draggable-element.d-1").drag(".draggable-element.d-3",{force:true})
    cy.get(".draggable-element.d-2").drag(".draggable-element.d-1",{force:true})
    cy.get(".draggable-element.d-1").drag(".draggable-element.d-4",{force:true})
    cy.get(".draggable-element.d-4").drag(".draggable-element.d-3",{force:true})

})
    
it("drag and drop ", () => {
        
    cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

    
    cy.get("#box3").should('be.visible');
    cy.get("#box106").should('be.visible');

    
    cy.get("#box3").drag("#box106", { force: true });

  
    cy.get("#box5").should('be.visible');
    cy.get("#box101").should('be.visible');

    cy.get("#box5").drag("#box101", { force: true });

    cy.get("#box7").should('be.visible');
    cy.get("#box105").should('be.visible');

    cy.get("#box7").drag("#box105", { force: true });

    cy.get("#box2").should('be.visible');
    cy.get("#box103").should('be.visible');

    cy.get("#box2").drag("#box103", { force: true });

    cy.get("#box6").should('be.visible');
    cy.get("#box107").should('be.visible');

    cy.get("#box6").drag("#box107", { force: true });
  });
  it("static drag and drop",()=>
{
    cy.visit("https://demo.automationtesting.in/Static.html")
    cy.get("#angular").drag("#droparea")
    cy.get("#mongo").drag("#droparea",{force:true})
    cy.get("#node").drag("#droparea",{force:true})
})
it("automate the drag and drop site",()=>
{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("#name").type("bala")
    cy.get("#email").type("bala02@gmail.com")
    cy.get("#phone").type("876956784")
    cy.get("#textarea").type('cypress automation tool')
    cy.get("#male").check()
    cy.get('input[type="file"]')
        .attachFile("logo-title.png")

        cy.get("form[id='singleFileForm'] button[type='submit']")
        .click()

        cy.get("#singleFileStatus").should
        ('contain',"Single file selected: logo-title.png, Size: 105136 bytes, Type: image/png")
    
        const filesToUpload = [
            "logo-title.png",
            "logo-title - Copy.png",
            "logo-title - Copy (2).png"
          ];
      
          cy.get('#multipleFilesInput')
            .attachFile(filesToUpload); 
      
          
          cy.get("form[id='multipleFilesForm'] button[type='submit']")
            .click();
    cy.get("#draggable p").drag("#droppable p", { force: true });
})

})