describe('tpFinal', {testIsolation :false}, () => {

    beforeEach('Borrar cookies y cargar la página', () => {
        cy.clearCookies();
        cy.visit('https://www.saucedemo.com');
        cy.get('.login_logo').should('contain', 'Swag Labs');
    });

    it('Compra con standard_user', () => {
        cy.loginStandarUser();
        cy.comprar();
        cy.checkout();
        cy.logout();
    });

    it('Compra con problem_user', () => {
        cy.loginProblemUser();
        cy.comprar();
        cy.checkout();
        cy.logout();
    });
});