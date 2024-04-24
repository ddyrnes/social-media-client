describe('The user can login', () => {
  beforeEach(() => {
    cy.visit('index.html');
    // Wait for elements to be visible before interacting with them
    cy.get("button[data-bs-target='#loginModal']:visible").should('exist');
    cy.get("input[type='email']:visible").should('exist');
    cy.get("input[type='password']:visible").should('exist');
    cy.get('button[type="submit"]:visible').should('exist');
  });

  it('should log in and access the user profile', () => {
    // Click the login button to open the login modal
    cy.get("button[data-bs-target='#loginModal']").click();

    // Fill in the login form
    cy.get("input[type='email']").type('DanDyr77157@stud.noroff.no');
    cy.get("input[type='password']").type('password123');
    cy.get('button[type="submit"]').click();

    // Check if the token is stored in localStorage after login
    cy.window().its('localStorage').should('have.property', 'token');
  });
});
