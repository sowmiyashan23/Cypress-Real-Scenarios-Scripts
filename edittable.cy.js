describe('Automate Table Row Editing', () => {

    beforeEach(() => {
      cy.visit('https://vinothqaacademy.com/webtable/');  
    });
  
    it('should fill and add a new row in the table with details', () => {
      
    
      const data = {
        name: 'John Doe',
        role: 'Software Engineer',
        email: 'john.doe@example.com',
        location: 'New York',
        department: 'Engineering'
      };
      const data2 = {
        name1: 'Bala',
        role1: 'Software tester',
        email1: 'bala.doe@example.com',
        location1: 'chennai',
        department1: 'Engineering'
      };
  
      
      cy.get('table[id="details"] tbody tr').first()
        .within(() => {
         
          cy.get('td:nth-child(1) input')  
            .clear()
            .type(data.name);
  
          
          cy.get('td:nth-child(2) input')  
            .clear()
            .type(data.role);
  
        
          cy.get('td:nth-child(3) input')  
            .clear()
            .type(data.email);
  
  
        
          cy.get('td:nth-child(4) input')  
            .clear()
            .type(data.location);
  
          
          cy.get('td:nth-child(5) input')  
            .clear()
            .type(data.department);
        });
  
      
      cy.get('#addBtn')  
        .click();

        cy.get('table[id="details"] tbody tr').first()
        .within(() => {
         
          cy.get('td:nth-child(1) input')  
            .clear()
            .type(data2.name1);
  
          
          cy.get('td:nth-child(2) input')  
            .clear()
            .type(data2.role1);
  
        
          cy.get('td:nth-child(3) input')  
            .clear()
            .type(data2.email1);
  
  
        
          cy.get('td:nth-child(4) input')  
            .clear()
            .type(data2.location1);
  
          
          cy.get('td:nth-child(5) input')  
            .clear()
            .type(data2.department1);
        });
  
      
      cy.get('#addBtn')  
        .click();
  
        cy.get('table[id="myTable"] tbody tr').last()  
        .within(() => {
          cy.get('td:nth-child(2)').should('have.text', data.name);  
          cy.get('td:nth-child(3)').should('have.text', data.role);  
          cy.get('td:nth-child(4)').should('have.text', data.email); 
         // cy.get('td:nth-child(4)').should('have.text', data.address); // Check Address
          cy.get('td:nth-child(5)').should('have.text', data.location)
          cy.get('td:nth-child(6)').should('have.text', data.department); 
        });

        cy.get("table[id='myTable']>tbody>tr>td:nth-child(1)").click()

        cy.get("#deleteBtn").click()
    })
  
  });
  