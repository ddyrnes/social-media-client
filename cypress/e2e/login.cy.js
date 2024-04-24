describe('Login Functionality', () => {
    it('Logs in with valid credentials', () => {
      // Visit the login page
      cy.visit('http://127.0.0.1:3000/index.html/');
  
      // Fill in the email and password fields with valid credentials
      cy.get('#loginEmail').type('DanDyr77157@stud.noroff.no');
      cy.get('#loginPassword').type('password123');
  
      // Click the login button
      cy.contains('Login').click();
  
      // Assert that the user is logged in
      cy.url().should('not.include', '/login'); // Ensure URL does not contain /login
      cy.contains('Logout').should('exist'); // Ensure Logout button is visible
    });
  });
  
