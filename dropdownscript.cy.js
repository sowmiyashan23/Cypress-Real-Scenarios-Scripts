describe("dropdown value",()=>
{
    it("selecting values in dynamic dropdown",()=>
    {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type('Iran{enter}')
        cy.get("#select2-billing_country-container").should('have.text',"Iran")
        cy.get("#select2-billing_state-container").click()
        cy.get("input[role='combobox']").type("Ilaam (ایلام){enter}");
        cy.get("#select2-billing_state-container").should("have.text", "Ilaam (ایلام)"); 
        cy.get("p[id='reasondummy_field'] span[role='combobox']").click()
        cy.get("input[role='combobox']").type("Visa extension{enter}")
        cy.get("p[id='reasondummy_field'] span[role='combobox']").should('have.text',"×Visa extension")
    })

    it("selecting the dropdown by using select ",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#country").select('China')
        cy.get("#country").should('have.value',"china")
        cy.get("#country").select('Australia')
        cy.get("#country").should('have.value',"australia")
        cy.get("#country").select('France')
        cy.get("#country").should('have.value',"france")
        cy.get("#country").select('Canada')
        cy.get("#country").should('have.value',"canada")
    })

    it("dropdown with another website",()=>
    {
        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.get("#Skills").select("Analytics").should('have.value',"Analytics")
        cy.get("#Skills").select("Android").should('have.value',"Android")
        cy.get("#Skills").select("Art Design").should('have.value',"Art Design")
        cy.get("#Skills").select("APIs").should('have.value',"APIs")
        cy.get("#Skills").select("Backup Management").should('have.value',"Backup Management")
        cy.get("#Skills").select("AutoCAD").should('have.value',"AutoCAD")
        cy.get("#yearbox").select('1920').should("have.value","1920")
        cy.get("#yearbox").select('1955').should("have.value","1955")
        cy.get("#yearbox").select('1960').should("have.value","1960")
        cy.get("#yearbox").select('1961').should("have.value","1961")
        cy.get("#yearbox").select('1956').should("have.value","1956")

        cy.get('#daybox').select('8').should('have.value','8')
        cy.get('#daybox').select('2').should('have.value','2')
        cy.get('#daybox').select('1').should('have.value','1')



    })
    it("dropdown test script",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.get('#dropdown').select("Option 1").should('have.value',"1")
        cy.get('#dropdown').select("Option 2").should('have.value',"2")

    })
    it("dropdown",()=>
        {
            cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
            cy.get("#dropdowm-menu-1").select("JAVA").should('have.value',"java")
            cy.get("#dropdowm-menu-1").select("C#").should('have.value',"c#")
            cy.get("#dropdowm-menu-1").select('Python').should('have.value',"python")
            cy.get("#dropdowm-menu-1").select("SQL").should('have.value',"sql")
            
            cy.get("#dropdowm-menu-2").select("Eclipse").should('have.value',"eclipse")
            cy.get("#dropdowm-menu-2").select("Maven").should('have.value',"maven")
            cy.get("#dropdowm-menu-2").select("TestNG").should('have.value',"testng")
            cy.get("#dropdowm-menu-2").select("JUnit").should('have.value',"junit")

            cy.get("#dropdowm-menu-3").select("HTML").should("have.value","html")
            cy.get("#dropdowm-menu-3").select("CSS").should("have.value","css")
            cy.get("#dropdowm-menu-3").select("JavaScript").should("have.value","javascript")
            cy.get("#dropdowm-menu-3").select("JQuery").should("have.value","jquery")

            cy.get("#fruit-selects").should("be.visible").select('Apple')
            
        })
    it("dropdowm for selecting option by its options ",()=>
    {
        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.get("body > header:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").click()
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
        cy.get("body > header:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").click()
        cy.get('.open > .dropdown-menu > :nth-child(3) > a').click()
        cy.get("body > header:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()

        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
        
        cy.get('[href="Interactions.html"]').click()
        cy.go('back')
        cy.get(".dropdown-toggle[href='#']").click()
        cy.get(':nth-child(8) > .dropdown-toggle').click()
        cy.go('back')
       

    })
})