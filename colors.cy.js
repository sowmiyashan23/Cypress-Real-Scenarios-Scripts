import 'cypress-hover';

describe("verifying the element color chanhges",()=>
{
    it("verifying the button color change",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("button[name='start']").should("be.enabled")
        .and("have.css",'background-color','rgb(154, 205, 50)')
        const buttonSelector = ("button[name='start']")

        cy.get(buttonSelector)
       .trigger('mouseover').click().trigger('mouseout')  
       .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 0, 0)'); 

      cy.get("#droppable").should("have.css","background-color","rgb(233, 233, 233)")
      cy.get("div[id='draggable'] p").drag("#droppable",{force:true})
      cy.get("#droppable").should("have.css",'background-color','rgb(255, 250, 144)')

      cy.get("a[href='http://testautomationpractice.blogspot.com/']")
      .should('have.css', 'color')
      .and('eq', 'rgb(0, 41, 155)')
      cy.get("a[href='http://testautomationpractice.blogspot.com/']").trigger('mouseover')
      .should('have.css', 'color')
      .and('eq', 'rgb(0, 41, 155)')

      const linkSelector="a[href='https://testautomationpractice.blogspot.com/p/download-files_25.html']"
      cy.get(linkSelector)
      .should('not.have.css', 'text-decoration', 'underline'); 

      cy.get(linkSelector)
      .trigger('mouseover')  
      .should('have.css', 'border-bottom-width', '0px')  
      .and('have.css', 'border-bottom-style', 'none') 
      .and('have.css', 'border-bottom-color', 'rgb(0, 41, 155)')

      cy.get(linkSelector)
      .trigger('mouseout')  
      .should('not.have.css', 'text-decoration', 'underline')
    })
   it("doubleclick and cursor changes",()=>
{
    cy.visit("https://webdriveruniversity.com/Actions/index.html");
    cy.get("#double-click")
    .should("have.css","background-color","rgb(254, 196, 45)")
    cy.get('h2').dblclick()
        cy.get("#double-click").should("have.css","background-color","rgb(147, 203, 90)")
    cy.xpath("//div[@id='droppable']")
    .should("have.css","background-color","rgb(97, 109, 179)")
    cy.get('#draggable > p > b').trigger("mousedown", { which: 1, force: true });  

    cy.get("div[id='droppable'] p b")
    .trigger("mousemove", { force: true })  
    .trigger("mouseup", { force: true }); 
    cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1) > b:nth-child(1)")
        .should("have.text", "Dropped!"); 
        cy.get('#droppable > p')
        .should("have.css","background-color","rgb(244, 89, 80)")
        cy.document().then((doc) => {
        
    const initialCursor = doc.defaultView.getComputedStyle(doc.body).cursor;
            expect(initialCursor).to.equal('auto');  
          });

        const linkSelector = '#nav-title'
        cy.get(linkSelector)
      .should('have.css', 'cursor', 'pointer'); 


    cy.get(linkSelector)
      .trigger('mouseover')  
      .should('have.css', 'cursor', 'pointer');  
    })
    it("saucedemo application",()=>
    {
      cy.visit("https://www.saucedemo.com/")
      cy.get('[data-test="username"]').type("standard_user");
      cy.get('[data-test="password"]').type("secret_sauce");
      cy.get('[data-test="login-button"]').click();
      
      const buttonselector = ('[data-test="add-to-cart-sauce-labs-backpack"]')
       cy.get(buttonselector)
      .should('have.text', "Add to cart")

      cy.get(buttonselector)
      .click();

      cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('have.text', 'Remove')

      cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('have.css', 'color', 'rgb(226, 35, 26)')


    })
    it("practice automation website",()=>
    {
      cy.visit("https://practicetestautomation.com/practice-test-login/")
      cy.get("#username").type("student")
      cy.get("#password").type("Password123")
      cy.get("#submit").click()

    cy.document().then((doc) => {
        
    const initialCursor = doc.defaultView.getComputedStyle(doc.body).cursor;
            expect(initialCursor).to.equal('auto');  
          });

          cy.get("li[id='menu-item-43'] a") 
      .should('not.have.css', 'text-decoration', 'underline')

          cy.get("li[id='menu-item-43'] a")
          .trigger("mouseover")
          .should('have.css', 'border-bottom-width', '0px')  
      .and('have.css', 'border-bottom-style', 'none') 
      .and('have.css', 'border-bottom-color', 'rgb(255, 255, 255)')
      .should('have.css', 'cursor', 'pointer')

      cy.get("li[id='menu-item-43'] a")
      .trigger('mouseout')  
      .should('not.have.css', 'text-decoration', 'underline')

      cy.get("li[id='menu-item-43'] a").click()
      cy.url().should("eq","https://practicetestautomation.com/")
      cy.get("li[id='menu-item-43'] a").should("have.css",'color',"rgb(255, 194, 112)")
    
    })
    it("orange hrm application",()=>
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get('[name="username"]').type("Admin") 
      cy.get('[name="password"]').type("admin123")
      cy.get('[type="submit"]').click() 
      cy.location('href').should('include', 'dashboard/index')
      
      cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
      cy.get('.--parent > .oxd-topbar-body-nav-tab-item').should("have.css","color","rgb(146, 155, 170)")
      cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
      .should("have.css","color",'rgb(255, 123, 29)')


    })
      it("dummy ticket application",()=>
      {

      cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

      cy.get("div[class='woocommerce-multi-currency wmc-right style-1 wmc-bottom wmc-sidebar'] div:nth-child(4) span:nth-child(1)")
      .should('have.css','background-color',"rgba(0, 0, 0, 0)")
      cy.get("div[class='woocommerce-multi-currency wmc-right style-1 wmc-bottom wmc-sidebar'] div:nth-child(4) span:nth-child(1)")
      .trigger("mouseover")
      .click()
      cy.get(".showcoupon").trigger("mouseover")
      .should('have.css', 'border-bottom-width', '0px')  
      .and('have.css', 'border-bottom-style', 'none') 
      .and('have.css', 'border-bottom-color', 'rgb(230, 88, 42)')


    }) 
    it.only("stackoverflow",()=>
    {
      cy.visit("https://www.geeksforgeeks.org/checking-radio-buttons-in-cypress/");

// Wait for the parent <ul> to be visible before checking the <span>
cy.get("ul.header-main__list")
  .should("be.visible")  // Ensure the parent <ul> is visible
  .find("li > span")  // Find the <span> inside the <li> after the parent is visible
  .should("be.visible")  // Now check if the <span> is visible
  .and("have.css", "color", "rgba(0, 0, 0, 0)");  // Validate its color

    })
  })

