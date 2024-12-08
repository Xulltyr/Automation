Cypress.Commands.add('loginStandarUser',() => {
    cy.get('input[placeholder="Username"]').type('standard_user');
    cy.get('input[placeholder="Password"]').type('secret_sauce');
    cy.get('#login-button').click();
});

Cypress.Commands.add('loginProblemUser',() => {
    cy.get('input[placeholder="Username"]').type('problem_user');
    cy.get('input[placeholder="Password"]').type('secret_sauce');
    cy.get('#login-button').click();
});

Cypress.Commands.add('comprar', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[data-test="remove-sauce-labs-backpack"]').length > 0) {
      cy.log('El producto Sauce Labs Backpack ya está en el carrito.');
    } else {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
  });
  cy.get('body').then(($body) => {
    if ($body.find('[data-test="remove-sauce-labs-bike-light"]').length > 0) {
      cy.log('El producto Sauce Labs Bike Light ya está en el carrito.');
    } else {
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }
  });

  cy.get('[data-test="shopping-cart-link"]').should('be.visible').click({ force: true });
  cy.get('[data-test="checkout"]').click();
});

Cypress.Commands.add('checkout', () => {
    cy.get('#first-name').type('Sapo');
    cy.get('#last-name').type('Pepe');
    cy.get('input[placeholder="Zip/Postal Code"]').type('1000');
    cy.get('#continue').click();
    cy.scrollTo('bottom');
    
    cy.get('body').then(($body) => {
      if ($body.find('#finish').length > 0) {
        cy.get('#finish').click();
        cy.get('h2').contains('Thank you for your order!');
        cy.get('#back-to-products').click();
      } else {
        cy.log('No se encontró el botón #finish, continuando con logout');
      }
    });
});
  
Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').should('be.visible').click();
    cy.get('#logout_sidebar_link').click();
});