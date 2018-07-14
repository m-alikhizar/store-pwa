describe('App initialization', () => {
  it('Loads products on page load', () => {
    cy.clearIndexedDB();
    cy.seedAndVisit();
    cy.get('.product-item').should('have.length', 10);
  });

  it('Should have an header', () => {
    cy.get('.navbar-brand').should('have.text', 'Store');
  });

  it('Should have 0 in cart initially', () => {
    cy.get('#popover-cart i').should('text', '0');
  });
});
