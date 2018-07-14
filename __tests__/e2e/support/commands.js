// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('seedAndVisit', () => {
  cy.server();

  cy.route(
    'GET',
    'https://my-json-server.typicode.com/carlosrobles/simple-api-mock/products',
    'fixture:products'
  );

  cy.visit('/');
});

Cypress.Commands.add('seedProductAndVisit', () => {
  cy.server();

  cy.route(
    'GET',
    'https://my-json-server.typicode.com/carlosrobles/simple-api-mock/products/1',
    'fixture:product'
  );

  cy.visit('/product/1');
});

Cypress.Commands.add('clearIndexedDB', () => {
  indexedDB.deleteDatabase('database');
});
