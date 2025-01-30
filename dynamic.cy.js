describe('Search Ashton Cox in the Table', () => {
    it('should find Ashton Cox in the table and log the result', () => {
      cy.visit('https://datatables.net/examples/data_sources/ajax.html')
  
      const name = 'Ashton Cox'; 
  
      cy.get('#example_wrapper > div:nth-child(2) > div > table > tbody > tr').each(($row) => {
        
        cy.wrap($row).find('td').each(($cell) => {
          const cellText = $cell.text().trim(); 
  
          if (cellText === name) {
            cy.log(`Found ${name} in cell: ${cellText}`);
            return false; 
          }
        });
      });
    });
    
        it('should get the text from the 2nd row and 3rd column', () => {
          cy.visit('https://datatables.net/examples/data_sources/ajax.html'); 
      
          
          cy.get('#example_wrapper > div:nth-child(2) > div > table > tbody > tr')  
            .eq(1)  
            .find('td')  
            .eq(2)  
            .then(($cell) => {
              const cellText = $cell.text().trim(); 
              cy.log(`The data in the 2nd row, 3rd column is: ${cellText}`);  
            });
        });
        
            it('should get the data from 2nd row, 3rd column on the 3rd page', () => {
              cy.visit('https://datatables.net/examples/data_sources/ajax.html'); 
          
              const targetPage = 3; 
              const totalPages = 6; 
          
              for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
                cy.log(`Searching on Page ${pageNumber}`);
        
                if (pageNumber === targetPage) {
                  cy.get('#example_wrapper > div:nth-child(2) > div > table > tbody > tr')
                    .eq(1)  
                    .find('td')
                    .eq(2) 
                    .then(($cell) => {
                      const cellText = $cell.text().trim(); 
                      cy.log(`Data found on Page ${pageNumber}, 2nd row, 3rd column: ${cellText}`);
                      
                    });
                }
                if (pageNumber < targetPage) {
                  cy.get('#example_wrapper > div:nth-child(3) > div:nth-child(2) > div > nav > button:nth-child(9)')
                    .click();
          
                  cy.get('#example_wrapper > div:nth-child(2) > div > table > tbody > tr').should('have.length.greaterThan', 0);
                }
              }
          
            });
          });
          
      
      

  