describe("hidden content of drop down ",()=>{
    it("accordion item",()=>
    {
        cy.visit("https://webdriveruniversity.com/Accordion/index.html")
        cy.location("href").should("eq","https://webdriveruniversity.com/Accordion/index.html")
        cy.get("#manual-testing-accordion").should("be.visible")
        .click()
        cy.get("div[id='manual-testing-description'] p").should("be.visible")
        .and("have.text","Manual testing has for some time been the most popular way to test code. For this method, the tester plays an important role of end user and verifies that all the features of the application work correctly. Manual testing however is on the decline. Companies and developers have realised the efficiency, accuracy and cost savings that is possible by adopting the use of automation testing.")
        cy.get("#manual-testing-accordion").click()

        cy.get("#cucumber-accordion").should("be.visible")
        .click()
        cy.get("div[id='cucumber-testing-description'] p").should("be.visible")
        .and("have.text","Cucumber (BDD) simplifies the requirement capturing process. Requirements can be captured, broken down and simplified effortlessly; making the captured requirements readable to anyone within the organisation and in turn providing the required details and backbone to develop accurate test cases also known as ‘Feature Files’.")
        cy.get("#cucumber-accordion").click()

        cy.get("#automation-accordion")
        .should("be.visible").click()
        cy.get("div[id='automation-testing-description'] p").should("be.visible")
        .and("have.text","Automation testing has been steadily grown in popularity these past few years thanks to the time/ cost savings and efficiency that it offers. Companies throughout the world have or plan to use automation testing to rapidly speed up their test capabilities. Automation test engineers are in great demand and offer an average salary of £45,000+ (2018). Now is a great time to learn about automation test engineering and this course has been carefully developed to slowly introduce you from the basics, all the way to building advanced frameworks.")
        cy.get("#automation-accordion").click()
        
        
        cy.get("#click-accordion").should("be.visible").click()
        cy.get("#timeout").should("be.visible")
        .and("have.text","This text has appeared after 5 seconds!")
        cy.get("#click-accordion").click()
    
    })
    it("accordion elenent",()=>
    {
        
        cy.visit("https://demo.automationtesting.in/Accordion.html");

        cy.get(':nth-child(2) > .panel-heading > .panel-title > a > b').click()

        cy.get('#collapse2 > .panel-body')
        .should("be.visible")
         .and("exist")
        .invoke('text')
        .then((text) => {
         const normalizedText = text.replace(/\s+/g, ' ').trim();
        const expectedText = "In this Automation tool, each and every functionality will be achieved by Single line code. i.e. Selecting a Value from dropdown, Switching between windows and Drag and Drop functionality etc...";

        expect(normalizedText).to.equal(expectedText);
  });
    cy.get(':nth-child(3) > .panel-heading > .panel-title > a > b').click()
    cy.get('#collapse3 > .panel-body').should("be.visible")
    .and("exist")
    .invoke('text')
    .then((text)=>
    {
        const normalizedText = text.replace(/\s+/g, ' ').trim();
        const expectedText ="As the name indicates, you can chain the methods without breaking the code i.e. you can write the code for each element continuously."
        expect(normalizedText).to.equal(expectedText);
    })


    })
    it("accordion",()=>{
        cy.visit("https://www.qaoncloud.com/e-commerce-testing-services")

        cy.get(".accordion-button.collapsed[data-bs-toggle='collapse'][data-bs-target='#flush-collapseOne']").click()
        cy.get("div[id='flush-collapseOne'] div:nth-child(1)").should("be.visible")
        .and("exist")
        .invoke('text')
        .then((text) => {
         
        const normalizedText = text.replace(/\s+/g, ' ').trim();
        const expectedText = "End to end software testing services from functionality and integration to security and performance.";
      
        expect(normalizedText).to.equal(expectedText);
        });

  cy.wait(500); 

  cy.get('#flush-headingOne > .accordion-button')
    .click();

  cy.get("div[id='flush-collapseOne'] div:nth-child(1)")
    .should('not.be.visible');

    cy.get(".accordion-button.collapsed[data-bs-toggle='collapse'][data-bs-target='#flush-collapseTwo']").click()

    cy.get('#flush-collapseTwo > .accordion-body').should("be.visible")

    .and("exist")
    .invoke('text')
    .then((text) => {
     
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    const expectedText = "We provide our clients with experienced and skilled QA testers, QA analysts, delivery managers, and QA Lead for every project.";
  
    expect(normalizedText).to.equal(expectedText);
    });

    cy.wait(500); 
    cy.get('#flush-headingTwo > .accordion-button').click()

    cy.wait(500); 

    cy.get('#flush-collapseTwo > .accordion-body').should("not.be.visible")

    cy.get('#flush-headingThree > .accordion-button').click()

    cy.get('#flush-collapseThree > .accordion-body').should("be.visible")
    .and("exist")
    .invoke('text')
    .then((text) => {
     
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    const expectedText = "Robust communication silos are implemented to increase efficiency, collaboration, and transparency.";
  
    expect(normalizedText).to.equal(expectedText);
    });
    cy.wait(500);
    cy.get('#flush-headingThree > .accordion-button').click()
    cy.get('#flush-collapseThree > .accordion-body').should("not.be.visible")

    cy.get('#flush-headingFour > .accordion-button').click()
    cy.get('#flush-collapseFour > .accordion-body').should("be.visible")
    .and("exist")
    .invoke('text')
    .then((text) => {
     
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    const expectedText = "Get periodic reports on app performance and bug fixes with complied details and accurate data.";
  
    expect(normalizedText).to.equal(expectedText);
    });
    cy.wait(500);
    cy.get('#flush-headingFour > .accordion-button').click()
    cy.get('#flush-collapseFour > .accordion-body').should("not.be.visible")

    cy.get('#flush-headingFive > .accordion-button').click()
    cy.get('#flush-collapseFive > .accordion-body').should("be.visible")
    .and("exist")
    .invoke('text')
    .then((text) => {
     
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    const expectedText = "Strategic testing and efficient processes implemented by QA Teams ensure that your e-commerce platform reaches the market on time.";
  
    expect(normalizedText).to.equal(expectedText);
    });
    cy.wait(500);
    cy.get('#flush-headingFive > .accordion-button').click()
    cy.get('#flush-collapseFive > .accordion-body').should("not.be.visible")

    cy.get('#flush-headingSix > .accordion-button').click()
    cy.get('#flush-collapseSix > .accordion-body').should("be.visible")
    .and("exist")
    .invoke('text')
    .then((text) => {
     
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    const expectedText = "Get testing services for various devices and platforms by expert teams with the latest technology and proven QA testing methods.";
  
    expect(normalizedText).to.equal(expectedText);
    });
    cy.wait(500);
    cy.get('#flush-headingSix > .accordion-button').click()
    cy.get('#flush-collapseSix > .accordion-body').should("not.be.visible")

    cy.get('#flush-headingSeven > .accordion-button').click()
    cy.get('#flush-collapseSeven > .accordion-body').should("be.visible")
    .and("exist")
    .invoke('text')
    .then((text) => {
     
    const normalizedText = text.replace(/\s+/g, ' ').trim();
    const expectedText = "QAonCloud helps businesses save costs by ensuring that apps are launched with high-quality and enhanced user interfaces.";
  
    expect(normalizedText).to.equal(expectedText);
    });
    cy.wait(500);
    cy.get('#flush-headingSeven > .accordion-button').click()
    cy.get('#flush-collapseSeven > .accordion-body').should("not.be.visible")

    })
})