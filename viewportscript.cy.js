describe("checking the different viewport",()=>
{
    it("should display correctly on iPhone 6",()=>
    {
        cy.viewport('iphone-6')
        cy.visit("https://www.zomato.com/")
        cy.url().should('eq',"https://www.zomato.com/")
        cy.get('.contents-wrapper > .sc-dBAPYN > .high-res-image')
        .should("be.visible").and("exist")
        cy.get(".sc-7kepeu-0.kYnyFA.description")
        .should("be.visible").and('have.text','Discover the best food & drinks in Chennai')
        cy.scrollTo('bottom')
        cy.window().then((win)=>
        {
            expect(win.scrollY).to.be.greaterThan(0)
        })
        cy.scrollTo(0,0)
        cy.scrollTo('bottomRight')
        cy.get("input[placeholder='Search for restaurant, cuisine or a dish']").should("be.visible")
        .type('biriyani{enter}')
        cy.get('.sc-3o0n99-0').click()
        cy.get(':nth-child(2) > .sc-3o0n99-5').should("be.visible").click()
        cy.go('back')
        cy.get('.sc-3o0n99-0').click()
        cy.get(':nth-child(3) > .sc-3o0n99-5').should('be.visible').click()
        cy.go('back')
        cy.get(".sc-7kepeu-0.kYnyFA.description").should('have.css', 'text-align', 'center');


    })
    it("should display correctly on ipad",()=>
    {
        cy.viewport('ipad-2')
        cy.visit("https://www.zomato.com/")
        cy.get('.sc-3o0n99-0').should('be.visible').click()
        cy.get(':nth-child(5) > .sc-3o0n99-5').should('be.visible').click()
        cy.get('.sc-guDjWT').should('be.visible').and('exist')
        cy.get('.sc-bQduHL > .sc-1yzxt5f-6 > .sc-1yzxt5f-4 > .sc-1yzxt5f-9').should("be.visible").type("bala")
        cy.get('.sc-kqEXUp > [label="Email"] > .sc-1yzxt5f-4 > .sc-1yzxt5f-9').should('be.visible').type("bala@gmail.com")
        cy.get('.sc-hgeeVt').should("be.visible")
        cy.get('.sc-1o2pknd-1').should('be.visible').click()
        cy.get('.sc-kqEXUp > .sc-1kx5g6g-1 > .sc-1kx5g6g-2').should('be.visible')
        cy.get('.sc-dpiBDp').should("be.visible")
        cy.get('.sc-re4bd0-9 > .sc-rbbb40-1').should("be.visible").click()
        cy.get(':nth-child(2) > .sc-1jt9o4p-0 > .sc-ixe81d-2 > .sc-ixe81d-6').should("be.visible").click()
        cy.get(':nth-child(3) > .sc-1jt9o4p-0 > .sc-ixe81d-2 > .sc-ixe81d-6').should("be.visible").click()
        cy.get(':nth-child(4) > .sc-1jt9o4p-0 > .sc-ixe81d-2 > .sc-ixe81d-6').should("be.visible").click()
        cy.get(':nth-child(5) > .sc-1jt9o4p-0 > .sc-ixe81d-2 > .sc-ixe81d-6').should("be.visible").click()
    })
    it("should properly display on iphone-4",()=>
    {
        cy.viewport(320,480)
        cy.visit("https://www.zomato.com/")
        cy.get('.sc-3o0n99-0').should('be.visible').click()
        cy.get(':nth-child(3) > .sc-3o0n99-5').should("be.visible").click()
        cy.get('[href="/partner-with-us/new/"] > img').should("be.visible").and("exist")
        cy.get('.fixed > :nth-child(2) > .flex > .z_icon').should('be.visible').click()
        cy.get('.my-3 > :nth-child(1)').should('be.visible').and('exist')
        cy.get('.my-3 > :nth-child(2)').should("be.visible")
        cy.get('.border-lavederMist > .flex').should("be.visible")
        cy.get('.justify-end > .z_icon').should("be.visible").click()
        cy.get('.border-t > .rounded-xl').should("be.visible")
    

    })
    it("iphone-x vieport",()=>
    {
    cy.viewport('iphone-x')
   cy.visit("https://www.zomato.com/")
   cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').should("be.visible").click()
   cy.get('.sc-yvzia9-3 > :nth-child(2) > .sc-yvzia9-6').should("be.visible")
   cy.get(':nth-child(2) > .sc-1jt9o4p-0 > .sc-ixe81d-2 > .sc-ixe81d-6').should("be.visible").click()
   cy.get(':nth-child(3) > .sc-1jt9o4p-0 > .sc-ixe81d-2 > .sc-ixe81d-6').should('be.visible').click()
   cy.get(':nth-child(4) > .sc-1jt9o4p-0 > .sc-ixe81d-2 > .sc-ixe81d-6').should('be.visible').click()
   
})
it("samsung s-10",()=>
{
    cy.viewport('samsung-s10')
    cy.visit("https://www.snapdeal.com/")
    cy.get('[navindex="1"] > .menuLinks > .catText').should("be.visible")
    cy.get('[navindex="2"] > .menuLinks > .catText').should('be.visible')
    cy.get('[navindex="3"] > .menuLinks > .catText').should('be.visible')
    cy.get('a.notIeLogoHeader > .notIeLogoHeader').should('be.visible')

    cy.viewport('samsung-s10','landscape')
    cy.visit("https://www.snapdeal.com/")
    cy.get('#inputValEnter').should('be.visible').type('kurtis')
    cy.get('[navindex="1"] > .menuLinks > .catText').should("be.visible").trigger('mouseover').click()


})
it("mackbook 13 viewport",()=>
{
    cy.viewport('macbook-13')
    cy.visit("https://www.snapdeal.com/")
    cy.get('.cartInner').should("be.visible")
    cy.get('.accountInner').should('be.visible')
    cy.get('[data-index="1"] > .dp-widget-link').should('be.visible')
    cy.get('.helpCentrDiv > .dp-widget-link').should('be.visible').click()
    cy.url().should('eq',"https://www.snapdeal.com/helpcenter")
    cy.get('#faq_search_text').should("be.visible")
    cy.get('#login').should('be.visible')
    cy.get('.bCrumbOmniTrack > span').should('be.visible').click()

    cy.viewport('macbook-13',"portrait")
    cy.visit("https://www.snapdeal.com/")

})
it("mackbook 11 viewport",()=>
{
    cy.viewport('macbook-11')
    cy.visit("https://www.snapdeal.com/")
    //cy.get('body > div:nth-child(60) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(8) > a:nth-child(1) > span:nth-child(1)').should('be.visible').click()
    cy.get('.banner-link > :nth-child(1)').should('be.visible')
    cy.get('.banner-link > :nth-child(2)').should('be.visible')
    cy.get('.banner-link > :nth-child(3)').should('be.visible')
    cy.get('.banner-link > :nth-child(4)').should('be.visible').click()
    cy.get('[href="https://www.snapdeal.com/page/terms"] > .col-xs-6').should('be.visible').and('exist')
    cy.get('[href="https://www.snapdeal.com/page/TrustPay"] > .col-xs-6').should('be.visible').and('exist')
    cy.get('[href="https://www.snapdeal.com/help?redirectFrom=footerstrip"] > .col-xs-6').should('be.visible')

    cy.viewport('iphone-6+')
    cy.visit("https://www.snapdeal.com/")
    cy.get('.col-xs-5 > .middle-heading').should('be.visible')
    cy.get(':nth-child(2) > .middle-heading').should('be.visible')
    cy.get('.col-xs-5 > .middle-content > :nth-child(1) > .underLineOnHover').should('be.visible').click()
    cy.get('.col-xs-5 > .middle-content > :nth-child(2) > .underLineOnHover').should('be.visible').click()
    cy.get('.col-xs-5 > .middle-content > :nth-child(3) > .underLineOnHover').should('be.visible').click()
    cy.get('.col-xs-5 > .middle-content > :nth-child(4) > .underLineOnHover').should('be.visible').click()
    cy.get('.col-xs-5 > .middle-content > :nth-child(5) > .underLineOnHover').should('be.visible').click()
    cy.go('back')
    cy.get(':nth-child(6) > .underLineOnHover').should('be.visible').click()
    cy.go('back')
    cy.get('.middle-content > :nth-child(7)').should('be.visible').click()


})
it("Validate the viewport on iPad Pro", () => {
      
    cy.viewport(1024, 1366);
    cy.visit("https://www.amazon.com/");
    cy.xpath("//i[@class='hm-icon nav-sprite']", { timeout: 10000 })
      .should("be.visible")
      .click({ force: true })
    
    cy.xpath("(//div[normalize-space()='Amazon Music'])[1]", { timeout: 10000 })
      .click();

    
    cy.viewport(1024, 1366, "landscape");
    cy.visit("https://www.amazon.com/");
    cy.xpath("//i[@class='hm-icon nav-sprite']", { timeout: 10000 })

      .click({ force: true })
    
    cy.xpath("(//div[normalize-space()='Amazon Music'])[1]", { timeout: 10000 })
      .click({ force: true })
  });

})