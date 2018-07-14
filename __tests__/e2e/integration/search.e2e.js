describe('Search suite', () => {
  it('should have search bar in header.', () => {
    cy.seedAndVisit();

    cy.get('input').should('have.length', 1);
  });

  it('should populate items on search', () => {
    cy.seedAndVisit();
    cy.get('input').type('1{enter}');

    cy.get('.product-item').should('have.length', 1);
  });
});
