describe("filtering the product",()=>
{
    it("filter the product by price",()=>
    {
        cy.visit("https://www.snapdeal.com/")

        cy.get('[navindex="3"] > .menuLinks > .catText').trigger("mouseover").click()
       
        cy.get("ul[id='topsearches'] li:nth-child(5) a:nth-child(1)").click()
        cy.get('[data-displayname="Color"] > .filter-content > .filter-inner > :nth-child(3) > label').click()
        cy.get('p[title="ASIAN DELTA-20 Black Men\'s Sports Running Shoes"]')
        .should('exist')
        .and('include.text', 'Black'); 
        cy.get('[data-displayname="Size"] > .filter-content > .filter-inner > :nth-child(1) > label').click()
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(3) > label').click()

        
        cy.get("#\\36 57618058707 > .product-tuple-description > .product-desc-rating > .dp-widget-link > .product-title")

        .should('exist')
        .and('include.text', 'Abros');


        cy.get('p[title="Abros ASGO0113 Black Men\'s Sports Running Shoes"]')
        .and('include.text', 'Abros');

        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(3) > label').click()

        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(3) > label').click()

        cy.get('[data-displayname="Color"] > .filter-content > .filter-inner > :nth-child(3) > label').click()

        cy.get(':nth-child(3) > .price-text-box > .input-filter').clear().type('196')

        cy.get(':nth-child(5) > .price-text-box > .input-filter').clear().type('300')

        cy.get('.price-go-arrow').click()

        cy.get('#display-price-654088406860').invoke('text').then((text) => {
            console.log('Extracted price text:', text); 
            

            const price = parseFloat(text.replace(/[^\d.]/g, '')) * 1000; 
            
            console.log('Scaled price:', price); 
            
    
            expect(price).to.be.within(196, 300);
          });

          cy.get('#display-price-624782822456').invoke('text').then((text) => {
            console.log('Extracted price text:', text); 
            

            const price = parseFloat(text.replace(/[^\d.]/g, '')) * 1000; 
            
            console.log('Scaled price:', price); 
            
    
            expect(price).to.be.within(196, 300);
          });

          cy.get(':nth-child(3) > .price-text-box > .input-filter').clear().type('500')

        cy.get(':nth-child(5) > .price-text-box > .input-filter').clear().type('600')

        cy.get('.price-go-arrow').click()
          
        cy.get('#display-price-622696133430').invoke('text').then((text) => {
            console.log('Extracted price text:', text); 
            

            const price = parseFloat(text.replace(/[^\d.]/g, '')) * 1000; 
            
            console.log('Scaled price:', price); 
            
    
            expect(price).to.be.within(500, 600);
          });
          cy.get('#display-price-647794532204').invoke('text').then((text) => {
            console.log('Extracted price text:', text); 
            

            const price = parseFloat(text.replace(/[^\d.]/g, '')) * 1000; 
            
            console.log('Scaled price:', price); 
            
    
            expect(price).to.be.within(500, 600);
          });
          cy.get('#display-price-662913365537').invoke('text').then((text) => {
            console.log('Extracted price text:', text); 
            

            const price = parseFloat(text.replace(/[^\d.]/g, '')) * 1000; 
            
            console.log('Scaled price:', price); 
            
    
            expect(price).to.be.within(500, 600);
          })

          cy.go('back')

          cy.get(':nth-child(3) > .subDefaultLink').click()

          cy.get('[data-displayname="Color"] > .filter-content > .filter-inner > :nth-child(3) > label').click()


          cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(3) > label').click()

          cy.get('.product-title').should('include.text',"Aarika")
  })
})