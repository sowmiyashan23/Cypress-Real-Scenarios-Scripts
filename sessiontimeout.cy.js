
describe('Login Test', () => {
    it('should log in successfully', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    
      cy.get("input[placeholder='Username']").type('Admin');
      cy.get('input[name="password"]').type('admin123');
  
    
      cy.get("button[type='submit']").click();
  
      cy.url().should('include', '/dashboard');

      cy.wait(1800000);
        
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()

      cy.reload()
      cy.get('.oxd-form-actions > .oxd-button--secondary').should("be.visible").click()
     
    });
    it('should log out the user and destroy the session', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        cy.get("input[placeholder='Username']").type('Admin');

        cy.get('input[name="password"]').type('admin123');
    
        cy.get("button[type='submit']").click();
    
        cy.url().should('include', '/dashboard');

        cy.get('.oxd-userdropdown-tab').click()

         cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    
        cy.url().should('include', '/login');
    
      });
      it("session timeout",()=>
    {
        cy.visit("https://practicetestautomation.com/practice-test-login/")

        cy.get('#username').clear().type("student")

        cy.get('#password').clear().type("Password123")

        cy.get('#submit').click()

        cy.url().should("eq","https://practicetestautomation.com/logged-in-successfully/")

        cy.get("a[href='https://practicetestautomation.com/practice/']").click()

        cy.reload()

        cy.get("a[href='https://practicetestautomation.com/practice-test-exceptions/']").should("be.visible").click()

        cy.visit("https://practicetestautomation.com/practice-test-login/")

        cy.get('#username').clear().type("student")

        cy.get('#password').clear().type("Password123")

        cy.get('#submit').click()

        cy.get('.wp-block-button__link').click()

        cy.url().should("eq","https://practicetestautomation.com/practice-test-login/")


    })
    it("session portal for hrms",()=>
    {
        cy.visit("https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex")

        cy.get('#frmLogin > fieldset > :nth-child(2) > .block > #Username').type("DC6262")

        cy.get('#Password').type("6262")

        cy.get('#btnLogin').click()

        cy.get('[data-menuid="da13b99a-2ec2-4a57-96a1-0ceca15613ac"] > a > .menu-icon').click()

        cy.reload()

        cy.url().should("eq","https://desicrewdtrial.crystalhr.com/Home/Calendar")

        cy.get('.btn-purple').should("be.visible")

        cy.wait(300000)

        cy.get('[data-menuid="16347c81-62c6-4296-9f6c-fbf3a606a18b"] > a > .menu-icon').click()


    })
  });
  