describe('Products suite', () => {
  it('should have 10 items initially.', () => {
    cy.seedAndVisit();

    cy.get('.product-item').should('have.length', 10);
  });

  it('Should load more items when scroll is near end', () => {
    cy.scrollTo('bottom');

    cy.wait(500);

    cy.get('.loading').should('have.length', 1);

    cy.wait(1000);

    cy.scrollTo('top');
  });

  it('Should open/close the cart', () => {
    cy.get('#popover-cart').click();
    cy.get('#popover-cart').click();
  });

  it('Should be able to add items to cart', () => {
    // adding and validating one item to cart

    cy.get('.add-to-cart')
      .first()
      .click();

    cy.get('#popover-cart i').should('text', '1');

    // adding same item to cart agian
    cy.get('.add-to-cart')
      .first()
      .click();

    cy.get('#popover-cart i').should('text', '2');

    // adding another item to cart agian
    cy.get('.add-to-cart')
      .eq(1)
      .click();

    cy.get('#popover-cart i').should('text', '3');

    cy.get('#popover-cart').click();

    // should have two items listed, because there is one item added to cart twice.
    cy.get('.popover .popover-inner .popover-body .product-item').should('have.length', '2');

    cy.get('.popover .total-price').should('text', 'TOTAL 856 AED');

    cy.get('#popover-cart').click();
  });

  it('Should be able to checkout', () => {
    cy.get('#popover-cart').click();

    cy.get('.popover a.check-out')
      .should('have.attr', 'href')
      .and('include', 'https://google.com');
  });

  it('Should sort items asc and desc', () => {
    cy.seedAndVisit();

    cy.get('.btn-group .btn.btn-outline-secondary:not(.dropdown-toggle)')
      .eq(0)
      .click();

    cy.get('.btn-group .btn.btn-outline-secondary:not(.dropdown-toggle)')
      .eq(0)
      .should('have.attr', 'class')
      .and('include', 'active');
  });
});
