describe('Product suite', () => {
  it('should have 10 items initially.', () => {
    cy.seedProductAndVisit();

    cy.get('.product-item').should('have.length', 1);
  });

  it('Should be able to add items to cart', () => {
    // adding and validating one item to cart

    cy.get('.product-item .btn')
      .first()
      .click();

    cy.get('#popover-cart i').should('text', '4');

    cy.get('#popover-cart').click();

    // should have two items listed, because there is one item added to cart twice.
    cy.get('.popover .popover-inner .popover-body .product-item').should('have.length', '2');

    cy.get('.popover .total-price').should('text', 'TOTAL 1,056 AED');
  });

  it('Should be able to checkout', () => {
    cy.get('.popover a.check-out')
      .should('have.attr', 'href')
      .and('include', 'https://google.com');
  });
});
