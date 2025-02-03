describe("coordinates",()=>
{
    it("clicking the buttons using coordinates",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type("Admin") 
        cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').then(($btn) => {
            
            const rect = $btn[0].getBoundingClientRect();
          
            const x = rect.left;  
            const y = rect.top;   
            const width = rect.width;  
            const height = rect.height; 
            
            cy.log(`Element's top: ${y}, left: ${x}`);
            cy.log(`Element's width: ${width}, height: ${height}`);
          });
          cy.get('[type="submit"]').then(($btn) => {
            const rect = $btn[0].getBoundingClientRect();
            const x = rect.left + rect.width / 2;  
            const y = rect.top + rect.height / 2; 
          
            cy.get('[type="submit"]').click(x, y,{force: true});  

          });
          cy.scrollTo(0, 500);
          });

          it("scrolling the page using coordinates",()=>
        {
            cy.visit("https://testautomationpractice.blogspot.com/")
            cy.document().then((doc) => {
                const pageHeight = doc.documentElement.scrollHeight;  
                cy.scrollTo(0, pageHeight);  
              });
                 cy.scrollTo(0, 0)
              cy.window().its('scrollY').should('equal', 0);
        })
        it("hovering an element using coordinates",()=>
        {
            cy.visit("https://www.snapdeal.com/")
            cy.get('[navindex="3"] > .menuLinks > .catText').then(($el) => {
                const position = $el.offset();  
                cy.get('body').trigger('mouseover', {
                  clientX: position.left + 10, 
                  clientY: position.top + 10, 
                  force: true,
                });
              });
              cy.get('[navindex="4"] > .menuLinks > .catText').then(($el) => {
                const position = $el.offset();  
                cy.get('body').trigger('mouseover', {
                  clientX: position.left + 10, 
                  clientY: position.top + 10, 
                  force: true,
                });
              });
              cy.get('[navindex="5"] > .menuLinks > .catText').then(($el) => {
                const position = $el.offset();  
                cy.get('body').trigger('mouseover', {
                  clientX: position.left + 10, 
                  clientY: position.top + 10, 
                  force: true,
                });
              });
        })
        it("typing something into the input filed using coordinates",()=>
        {
            cy.visit("https://testautomationpractice.blogspot.com/")
            cy.get("#name").click(50,20).type("bala")
            cy.get("#email").click(50,10).type("bala@gmail.com")
            cy.get("#phone").click(50,10).type("564278899")
            cy.get("#textarea").click(50,20).type("something ")
        })
        it.only("clicking the specific bottom of the link using coordinates",()=>
        {
            cy.visit("https://testautomationpractice.blogspot.com/")
            cy.get("a[href='http://testautomationpractice.blogspot.com/']").then(($link) => {
                const rect = $link[0].getBoundingClientRect();  
                
                const x = rect.left + rect.width / 2;  
                const bottomY = rect.top + rect.height;  
                
                cy.log(`Clicking at bottom: x = ${x}, y = ${bottomY}`);
                
                cy.get("a[href='http://testautomationpractice.blogspot.com/']").click(x, bottomY, { force: true });   
        });
        cy.get('a[href="https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html"]').then(($link) => {
            const rect = $link[0].getBoundingClientRect(); 
    
            const x = rect.left + rect.width / 2;  
            const bottomY = rect.top + rect.height;  
            
            cy.log(`Clicking at bottom: x = ${x}, y = ${bottomY}`);
            
            cy.get("a[href='https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html']").click(x, bottomY, { force: true });   
    });
          });
        
              
        })
              
        
    
   
    
      
      
      
      
      
