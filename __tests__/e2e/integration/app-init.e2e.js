describe('App initialization', () => {
  // it('should have a header', () => {
  //   cy.visit('/');

  //   cy.get('.navbar-brand').should('have.text', 'Store');
  // });

  it.only('Loads products on page load', () => {
    cy.server();

    cy.route(
      'GET',
      'https://my-json-server.typicode.com/carlosrobles/simple-api-mock/products',
      'fixture:products'
    );

    cy.visit('/');

    cy.get('.product-item').should('have.length', 5);
  });
});
