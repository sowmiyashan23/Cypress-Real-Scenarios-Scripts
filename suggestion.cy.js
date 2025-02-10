describe("Search Bar Functionality - Auto-suggestions", () => {

    beforeEach(() => {

      cy.visit("https://www.snapdeal.com/"); 

    });
  
    it("should display relevant auto-suggestions based on the input query", () => {
      
      cy.get("#inputValEnter").clear().type("sarees");
  
      
      cy.get(".suggestionList_menu").should('be.visible') 
        .and('include.text', 'sarees')
        .and('include.text', 'party wear sarees')
        .and('include.text', 'sarees girl');
  
      cy.get(".suggestionList_menu").contains('sarees girl');
  
      
      cy.get("#inputValEnter").clear().type("sarees white");
  
      
      cy.get(".searchAutoSuggstn.open").should('be.visible')
        .and('include.text', 'white sarees')
        .and('include.text', 'white cotton sarees')
        .and('include.text', 'white pattu sarees')
        .and('include.text', 'white colour sarees')
        .and('include.text', 'white combition sarees');
    });
  
    it("should handle the case when no suggestions match the query", () => {
      
      cy.get("#inputValEnter").clear().type("xyzxyzxyz{enter}");
  
      
      cy.get(".alert-heading").should('be.visible')
        .and('contain.text', 'Oops! Looks like something went wrong, please try again in sometime.');
    });
  
    it("should display 'Trending Searches' when no query is entered", () => {

      cy.get("#inputValEnter").clear();
  
      
      cy.get("div[class='searchAutoSuggstn open'] div[class='searchContainer']").should('be.visible')
      .and('include.text',"Trending Searches")
      cy.get(".searchAutoSuggstn.open").should('include.text',"shoes for men")
        .and('include.text', "shoes for men")
        .and('include.text', "kurti set")
        .and('include.text', "sandal men");
    });
  
    it("should allow selecting a suggestion with mouse click", () => {
      
      cy.get("#inputValEnter").clear().type("sarees");
      cy.get(".suggestionList_menu").should('be.visible');
      cy.get(".suggestionList_menu>li:nth-child(1)").click();
  
    
      cy.get("#inputValEnter").should('have.value', 'sarees');
    });
  
    it("should allow selecting a suggestion using keyboard navigation", () => {
      
      cy.get("#inputValEnter").clear().type("sarees");
      cy.get(".suggestionList_menu").should('be.visible');
  
      
      cy.get("#inputValEnter").type("{downArrow}{enter}");
  
    });
  
    it("should show suggestions related to multiple words typed", () => {

      cy.get("#inputValEnter").clear().type("white sarees");
  
    
      cy.get(".searchAutoSuggstn.open").should('include.text', 'white saree')
        .and('include.text', 'white cotton saree')
        .and('include.text', 'white pattu saree');
    });      
  
    it("should clear suggestions when input is cleared", () => {
    
      cy.get("#inputValEnter").clear().type("cotton sarees");
  
    
      cy.get(".suggestionList_menu").should('be.visible');
  
    
      cy.get("#inputValEnter").clear().click();
      cy.get(".searchAutoSuggstn.open").should('not.include.text',"cotton sarees"); 
    });
  
    it("should ensure the suggestion list is correctly aligned and visible on different resolution", () => {
    
        cy.viewport(1440, 900)
  
      
      cy.get("#inputValEnter").clear({ force: true }).type("sarees");
      cy.get(".suggestionList_menu").should('be.visible');
      cy.get(".suggestionList_menu").should('include.text', 'sarees');
    });
    it("should ensure the suggestion list is correctly aligned and visible on different resolutions ", () => {
    
        cy.viewport(2560 , 1440)
  
      
      cy.get("#inputValEnter").clear({ force: true }).type("sarees");
      cy.get(".suggestionList_menu").should('be.visible');
      cy.get(".suggestionList_menu").should('include.text', 'sarees');
    });
  
    it("should handle search when no matching suggestions are available", () => {

      cy.get("#inputValEnter").clear().type("nonexistentsearchterm");
  
    
      cy.get(".suggestionList_menu").should('not.exist'); 
    });
  
    it("should handle special characters or typos in the query", () => {
    
      cy.get("#inputValEnter").clear().type("sarres"); 
      cy.get(".suggestionList_menu").should('be.visible')
        .and('include.text', 'saree');  
    });
  
  });
   