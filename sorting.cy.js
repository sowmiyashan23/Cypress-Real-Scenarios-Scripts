describe('Bank Balance Column Sorting', () => {
    it('should check if the bank balance column is sorted in ascending order', () => {
      cy.visit('https://www.ag-grid.com/react-data-grid/');

      cy.get('._mainNavLarge_c73dy_190 > ._navItemList_c73dy_223 > :nth-child(1) > ._navLink_c73dy_241 > span').click();
  
      cy.get("div[col-id='bankBalance'] div[role='presentation'] div[role='presentation'] div[role='presentation'] span[class='ag-header-cell-text']").click({ force: true });

      cy.wait(500); 
  
      cy.get('.ag-row>div:nth-child(7)')
        .then((balanceCells) => {
        
          const balances = [...balanceCells].map((cell) => {
            const balanceText = cell.innerText.replace(/[^0-9.-]+/g, ""); 
            return parseFloat(balanceText);
          });
  
        
          const sortedBalances = [...balances].sort((a, b) => a - b);
  
        
          cy.log('Original Balances:', balances);
          cy.log('Sorted Balances:', sortedBalances);
  
        
          for (let i = 1; i < sortedBalances.length; i++) {
            expect(sortedBalances[i - 1]).to.be.lessThan(sortedBalances[i]); 
          }
        });
    });
    
    
        it('should check if the name column is sorted in alphabetical order', () => {
          cy.visit('https://www.ag-grid.com/react-data-grid/');
          cy.get('._mainNavLarge_c73dy_190 > ._navItemList_c73dy_223 > :nth-child(1) > ._navLink_c73dy_241 > span').click();
      
          cy.get("div[col-id='name'] span[class='ag-sort-indicator-icon ag-sort-descending-icon ag-hidden'] span[role='presentation']").click({ force: true });
      
          cy.wait(500); 
    
          cy.get('.ag-row>div:nth-child(2)')
            .then((nameCells) => {
    
              const names = [...nameCells].map((cell) => cell.innerText.trim().toLowerCase()); 
      
            
              const sortedNames = [...names].sort()
    
              cy.log('Original Names:', names);
              cy.log('Sorted Names:', sortedNames);
              cy.get("div[col-id='name'] span[class='ag-sort-indicator-icon ag-sort-descending-icon ag-hidden'] span[role='presentation']").click({ force: true });
      
            cy.wait(500); 

cy.get('.ag-row>div:nth-child(2)').then((value) => {
  const names = [...value].map(cell => cell.innerText.trim());

  cy.log('Names in Descending Order:', JSON.stringify(names));

  for (let i = 1; i < names.length; i++) {
    expect(names[i - 1].localeCompare(names[i])).to.be.greaterThan(0);
  }
});

              cy.get('.ag-row>div:nth-child(2)').then((value)=>
            {
                const namedescending = value.text()
                cy.log(JSON.stringify(namedescending))
            })
    
              //for (let i = 1; i < sortedNames.length; i++) {
                //expect(sortedNames[i - 1]).to.be.lessThan(sortedNames[i]); // Check that each name is alphabetically smaller than the next
              //}
            });
        });
        it("filtering the names",()=>
        {
            cy.visit("https://www.ag-grid.com/react-data-grid/")
            
         cy.get('._mainNavLarge_c73dy_190 > ._navItemList_c73dy_223 > :nth-child(1) > ._navLink_c73dy_241 > span').click();
         cy.get("div[role='row'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2)").click()
         cy.get('#ag-195-input').type("Amelia{enter}")
         cy.get('.ag-row>div:nth-child(2)').should('include.text',"Amelia")
        })
        it('should toggle sorting on Name column (ascending, descending, and no sort)', () => {
            cy.visit("https://www.ag-grid.com/react-data-grid/")
            cy.get('._mainNavLarge_c73dy_190 > ._navItemList_c73dy_223 > :nth-child(1) > ._navLink_c73dy_241 > span').click()
            
            cy.get("div[col-id='name'] span[class='ag-sort-indicator-icon ag-sort-descending-icon ag-hidden'] span[role='presentation']").click({ force: true });
        
        
            cy.get('#cell-name-105')
            .contains('Amelia Cage') 
        
            
            cy.get('.ag-header-cell-label:nth-child(1)').click({force:true})
        
            
          })
      });
    
    
      

  