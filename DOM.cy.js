describe("intercting with the dom elements",()=>
{
    it("DOM",()=>
    {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/shadowdom")
        cy.get('h2')
        cy.get('h2').should('contain.text', 'I belong to Regular/Light Dom');
         cy.get('input[name="channelname"]')
        .should("be.visible")
        .type("automation test")
        .should("have.value","automation test")
        cy.get('button').click()
        cy.get('div#shadowHost')
        .shadow()
        .find('input#name').type("cypress automation test")
        .should("have.value","cypress automation test")

    })
    it.skip("another website shadow Dom",()=>
    {
        cy.visit("https://books-pwakit.appspot.com/")
        cy.get('book-app')
        .shadow().find('app-toolbar input#input')
        .type("software testing")
    })
    it("visiting the website",()=>
    {
        cy.visit("https://desicrew.in/")
        cy.location('href').should("eq","https://desicrew.in/")
        cy.get("img[alt='DesiCrew Logo']").should("be.visible")
        .and("exist")
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)")
        .should("be.visible").and("exist")
        const exptext="Home"
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)")
        .then((value)=>
        {
            const actvalue = value.text()
            expect(actvalue).equal(exptext)
        })
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)")
        .click()
        cy.url().should("eq","https://desicrew.in/")
        cy.get("a[href='../about-us/about-us.html']").should("be.visible")
        .and("exist")
        const expdata = "About us"
        cy.get("a[href='../about-us/about-us.html']").then((value)=>
        {
            const actdata = value.text()
            expect(actdata).equal(expdata)
        })
        cy.get('a').contains('About us')
        cy.get("a[href='../about-us/about-us.html']").click()
        cy.url().should("eq","https://desicrew.in/about-us/about-us.html")
        cy.get('#accountDropdown')
        .should("be.visible")
        .and("exist")
        const expmanaged = "Managed IT"
        cy.get('#accountDropdown')
        .then((data)=>
        {
            const actmanaged = data.text().replace(/\s+/g, ' ').trim();
            expect(actmanaged).equal(expmanaged)
        })
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(1) > .dropdown-item').should("be.visible")
        .and('contain.text',"24/7 Network and Systems Monitoring (NOC)").click()
        cy.url().should('eq',"https://desicrew.in/managed-aiops-it-service/network-and-system-monitoring.html")
        cy.get('#accountDropdown').trigger('mouseover').click()
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(2) > .dropdown-item').should("be.visible")
        .and('contain.text',"Database and Application Management")
        cy.get(':nth-child(4) > #servicesDropdown').should("be.visible")
        .and("exist")
        const exptmanage="Managed Security"
        cy.get(':nth-child(4) > #servicesDropdown').then((data)=>
        {
            const actmanage = data.text().replace(/\s+/g, ' ').trim();
            expect(actmanage).equal(exptmanage)
        })
        cy.get(':nth-child(4) > #servicesDropdown').trigger('mouseover').click()
        cy.get(':nth-child(4) > .dropdown-menu > :nth-child(2) > .dropdown-item').should("be.visible")
        .and('contain.text',"Incident Response")
        cy.get(':nth-child(5) > #servicesDropdown').should("be.visible")
        .and("exist")
        const servicedata = "Other Services"
        cy.get(':nth-child(5) > #servicesDropdown').then((data)=>
        {
            const actservices=data.text()
            expect(actservices).equal(servicedata)
        })
        cy.get(':nth-child(5) > #servicesDropdown').trigger("mouseover").click()
        cy.get(':nth-child(6) > #servicesDropdown').should("be.visible")
            .and('exist')
        const expresources = "Resources"
        cy.get(':nth-child(6) > #servicesDropdown').then((data)=>
        {
            const actresource= data.text()
            expect(actresource).equal(expresources)
        })
        cy.get(':nth-child(6) > #servicesDropdown').trigger("mouseover").click()
        cy.get(':nth-child(6) > .dropdown-menu > li > .dropdown-item').should("be.visible")
        .and("exist")
        .and('contain.text',"Customer Case Studies").click()
        cy.url().should('include',"/customer-case-studies.html")
        cy.get(':nth-child(2) > .d-block').should("be.visible").and("exist")
        cy.get('.mt-5 > :nth-child(1) > .d-block').should("be.visible").and('exist')
        cy.get('.cardcolor > section > .container > .row > :nth-child(1)').scrollIntoView()
        .should("be.visible").and("exist")
        cy.get('section > .container > .row > :nth-child(2) > .card').should("be.visible")
        .and("exist")
        cy.get('section > .container > .row > :nth-child(3) > .card').should("be.visible").and("exist")
        .trigger('mouseover')
        cy.wait(3000)

        cy.get('section > .container > .row > :nth-child(4) > .card').should("be.visible").and('exist')
        cy.get('#scrollToTopBtn').click()
        cy.window().then((win)=>
        {
            expect(win.scrollY).to.equal(0)
        })
        cy.get("a[type='submit']").click({force:true})
        cy.url().should("eq","https://desicrew.in/contact-us/contact-us.html")
        cy.get('.col-12 > .d-block').should("be.visible").and("exist")
        cy.get('.fs-4').should("be.visible")
        .and('contain.text',"Contact Us for Meeting or Demo")
        cy.get('#fullName')
        .should('be.visible')
        .and('exist')

        .and('have.attr', 'placeholder', 'Enter Name')
        .type('balaathikesavan',{force:true})
         .should('have.value', 'balaathikesavan')
         cy.get('#workEmail').should("be.visible")
         .and("exist")
         .and('have.attr', 'placeholder', 'Enter Business Email')
         .type("balaaadhi@gmail.com").should("have.value","balaaadhi@gmail.com")

         cy.get('#phoneNumber').should("be.visible").and("exist")
         .and("have.attr","placeholder","Enter Phone Number")
        .type("9150794431").should("have.value","9150794431")

        cy.get('#message').should("be.visible")
        .and("exist").and("have.attr","placeholder","Type Message")
        .type("cypress automation test").should("have.value","cypress automation test")
        cy.get('[href="https://www.facebook.com/DesiCrewSolns/"] > .fab').scrollIntoView()
        .should("be.visible").and("exist").click()
        cy.url().should("eq","https://www.facebook.com/DesiCrewSolns/")
        cy.go('back')
        cy.get('.fa-brands').should("be.visible").click()
        cy.url().should("eq","https://x.com/i/flow/login?redirect_after_login=%2Fdesicrewsolns")
        cy.go('back')
        cy.get('[href="https://www.youtube.com/user/DesiCrewSolutions/videos"] > .fab').should("be.visible")
        .and("exist").click()
        cy.url().should("eq","https://www.youtube.com/user/DesiCrewSolutions/videos")
        cy.go("back")
       

    })
    it("handling the demo modal and alerts",()=>
    {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get("span[id='button1'] p").click()
        cy.on('window:alert',(message)=>
        {
            expect(message).to.include("I am an alert box!")
            return true
        })
        cy.get("#button2").should("be.visible")
        .and("exist").click()
        cy.get(".modal-body").should("be.visible")
        .and("exist")
        cy.get('.modal-footer > .btn').click()
    })


    it("handling the modal pop up by cancelling dynamically",()=>
    {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.location("href").should("eq", "https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    
    cy.get(".navbar-logo-img.navbar-logo-img-normal").should("be.visible");
    cy.get("li[id='menu-item-13'] a[class=' nav-item-child ffb-ark-first-level-menu ']")
      .should("be.visible")
      .and("have.text", "Home");
    cy.get("li[id='menu-item-574'] a[class=' nav-item-child ffb-ark-first-level-menu ']")
      .should("be.visible")
      .and("have.text", "Buy Ticket");
    cy.get("a[href='https://www.dummyticket.com/contact/']")
      .should("be.visible")
      .and("have.text", "Contact");
    
    cy.get("div[id='opc-product-selection'] li:nth-child(1)").should("be.visible");
    cy.get("#product_549").click();
    
    const expresult = '"Dummy ticket for Visa Application" added to your order. Complete your order below.';
    cy.get("div[role='alert']").then((data) => {
      const actresult = data.text().replace(/\s+/g, " ").trim();
      expect(actresult).to.equal(expresult);
    });

    cy.xpath("//h3[normalize-space()='Passenger details:']")
      .should("be.visible")
      .and("have.text", "Passenger details:");

    cy.get("#travname_field > label")
      .should("be.visible")
      .should("include.text", "*");
    cy.get("#travlastname_field > label")
      .should("be.visible")
      .should("include.text", "*");

    cy.get("#travname")
      .should("be.visible")
      .and("have.attr", "placeholder", "first and middle name as on passport")
      .type("Zade").should("have.value","Zade");
    cy.get("#travlastname")
      .should("be.visible")
      .and("have.attr", "placeholder", "last name as on passport")
      .type("maedows").should("have.value","maedows");

    cy.get("#dob_field > label")
      .should("be.visible")
      .should("include.text", "*");
    cy.get("#dob").click();
   cy.get("tbody tr:nth-child(5) td:nth-child(6) a:nth-child(1)").click()

    cy.get('#sex_field > [for="1"]')
      .should("be.visible")
      .should("include.text", "*");
    cy.get('[for="sex_1"]').should("be.visible").and("exist");
    cy.get("#sex_1").click().should("be.checked");
    cy.get('[for="sex_2"]').should("be.visible").and("exist");
    cy.get("#sex_2").should("not.be.checked");
    cy.get("#sex_2").click().should("be.checked");
    cy.get("#sex_1").should("not.be.checked");

    cy.get("#fromcity").type("chennai").should("have.value", "chennai");
    cy.get("#tocity").type("New York").should("have.value", "New York");

    cy.get("#departon").click();
    cy.get("a[class='ui-state-default']").click();

    cy.get("#notes").type("flight should be on time ");
    cy.get("#select2-reasondummy-container").click();
    cy.get("input[role='combobox']").type("Visa application{enter}");
    cy.get("#select2-reasondummy-container").should("contain.text","Visa application")

    cy.get("#appoinmentdate").click();
    cy.get("tbody tr:nth-child(4) td:nth-child(5) a:nth-child(1)").click();
    
    cy.get("#deliverymethod_3").click().should("be.checked");

    cy.get("#billname").type("zade").should("have.value", "zade");
    cy.get("#billing_phone")
      .type("9876545623")
      .should("have.value", "9876545623");
    cy.get("#billing_email")
      .type("zademadeows@gmail.com")
      .should("have.value", "zademadeows@gmail.com");
    cy.get("#select2-billing_country-container").click();
    cy.get("input[role='combobox']").type("India{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "India");

    cy.get("#billing_address_1").type("no.123,ghandhi street").should("have.value","no.123,ghandhi street");
    cy.get("#billing_address_2").type("AS apartment B block 3rd floor").should("have.value","AS apartment B block 3rd floor");
    cy.get("#billing_city").type("chennai").should("have.value","chennai");
    cy.get("#select2-billing_state-container").click();
    cy.get("input[role='combobox']").type("Tamil Nadu{enter}");
    cy.get("#select2-billing_state-container").should("have.text", "Tamil Nadu");
    
    cy.get("#billing_postcode").type("603404");

    cy.get("#order_review_heading").should("be.visible");
    cy.get("tr[class='cart-subtotal'] th").should("be.visible");

    const exptext = "Cart Subtotal";
    cy.get("tr[class='cart-subtotal'] th").then((data) => {
      const acttext = data.text();
      expect(acttext).to.equal(exptext);
    });

    cy.get("#place_order").click();
    cy.get(":nth-child(2) > .l1Item > .l1Item__content > p").click();
    
    cy.get('[data-testid="cardNumber"]').type("4242 4242 4242 4242")
    cy.get('[data-testid="cardExpiry"]').type("05/26");
    cy.get('[data-testid="cardCvv"]').type("123");
    cy.get('[data-testid="cardOwnerName"]').type("zademeadows").should("have.value","zademeadows");

    cy.go("back");
    cy.go("back");
    cy.wait(3000)
    cy.get('#cancelModal > .modal > .v-align-main > .v-align-cntnr > .modal-content > .modal-body > .popup-content > .cancel-modal-btns > .txt-btn').click()

    cy.get("li[id='menu-item-13'] a[class=' nav-item-child ffb-ark-first-level-menu ']").click();
    cy.location("href").should("eq", "https://www.dummyticket.com/");
    
    cy.get("li[id='menu-item-574'] a[class=' nav-item-child ffb-ark-first-level-menu ']").click();
    cy.get("a[href='https://www.dummyticket.com/contact/']").click();
    cy.location("href").should("eq", "https://www.dummyticket.com/contact/");
    cy.go("back");
    })
    it.only("dynamic content update",()=>
    {
        cy.visit("https://www.youtube.com/")
        cy.get("input[placeholder='Search'][name='search_query'][role='combobox']").type("cypress au")
        cy.wait(2000); 

        cy.get('.ytSuggestionComponentLeftContainer') 
        .should('exist') 
        .find('span') 
        .should('contain.text', 'cypress automation').as('clickbutton')
        
        //.click({multiple:true})
        cy.get('@clickbutton').should('be.visible').click({ force: true })
        cy.url().should('eq',"https://www.youtube.com/?themeRefresh=1")
        //cy.wait(3000)
        //cy.get('@clickbutton').click({ multiple: true });

  
      
  });
});
   