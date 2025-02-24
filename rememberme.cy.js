describe("Remember Me Functionality", () => {
    it("verifying remember me functionality", () => {
        // Visit the login page
        cy.visit("https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex");

        // Type username and password
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > fieldset:nth-child(1) > label:nth-child(2) > span:nth-child(1) > input:nth-child(1)")
            .type("DC6262");
        cy.get("#Password").type("6262");

        cy.get("span[class='lbl']").click();

    
        cy.get('#btnLogin').click();

        // Assertion to verify if the user is redirected to the home page after login
        cy.url().should('include', '/Home/Index'); 

        // Simulate closing the browser and revisiting the page
        cy.visit("https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex");

        
        cy.url().should('include', '/Home/Index'); 

        cy.get('.active > a > .menu-icon').click()
        cy.get('[data-menuid="da13b99a-2ec2-4a57-96a1-0ceca15613ac"] > a > .menu-icon').click()

        cy.get('.active > a > .menu-icon').click()
        cy.get('[data-menuid="0e00871c-84f2-4c00-998b-9d0e5917676b"] > .dropdown-toggle > .menu-icon').click()
        cy.get('.hover-show > .submenu > .open > a').click()

        cy.get('[data-menuid="9189935f-9e4f-46ac-8269-fe3a1a2e1be0"] > .dropdown-toggle > .menu-icon').click()

        cy.get('.hover-show > .submenu > .open > a').click()
        cy.url().should('eq',"https://desicrewdtrial.crystalhr.com/Modules/TaskManager/Home/Index")

        cy.get('[data-menuid="2b9cdecf-f018-4c14-9b37-358f1ff59b00"] > .dropdown-toggle > .menu-icon').click()

        cy.get('.hover-show > .submenu > .open > a').click()

        cy.url().should('eq',"https://desicrewdtrial.crystalhr.com/Modules/ExitManagement/ResignationEntry/ResignationEntry")

        cy.get('[data-menuid="c4511443-ad55-4e84-bdec-eaa4d6e8e4a5"] > .dropdown-toggle > .menu-icon').click()

        cy.get('.hover-show > .submenu > .open > a').click()
        cy.url().should('eq',"https://desicrewdtrial.crystalhr.com/Modules/Grievance/GrievanceEntry")

        cy.get('[data-menuid="4b1925f9-759b-436e-9c6c-b632121f004b"] > .dropdown-toggle > .menu-icon').click()
        cy.get('.hover-show > .submenu > .open > a').click()

        cy.get('[data-menuid="ff1c1a44-2cf6-4335-9c76-4c9fea003a8e"] > .dropdown-toggle > .menu-icon').click()
        cy.get('.hover-show > .submenu > [data-menuid="fa30f856-ecda-4d8b-87d0-eb18de8dbaa5"] > a').click()

        cy.url().should('eq',"https://desicrewdtrial.crystalhr.com/Modules/TimeAttendance/EmployeeEvent/Entry")

        //cy.get('.hover-show > .submenu > [data-menuid="e94da6a5-8d8d-48fb-b209-b53d680dad89"] > a').click()
        //cy.url().should('eq',"https://desicrewdtrial.crystalhr.com/Modules/TimeAttendance/EmployeeExcessTimeRequest/Index")

       // cy.get('.hover-show > .submenu > [data-menuid="a69cb72b-9d40-4c80-8bea-d578066701e0"] > a > .menu-text').click()

       cy.visit("https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex");

       cy.url().should('include', '/Home/Index'); 




 

        
    });
});
