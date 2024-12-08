import './tp1Commands';
describe('actividad1', { testIsolation: false },()  => {
    it('Visitar la pág.', () => {
        cy.visit('https://automationintesting.online/')
    });

    it('Verificar la información del hotel', () => {
        cy.get('p').contains('Shady Meadows B&B')
        cy.get('p').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')
        cy.get('p').contains('012345678901')
        cy.get('p').contains('fake@fakeemail.com')
    });

    it('imagen visible', () => {
        cy.get('img[src="/images/rbp-logo.jpg"]').should('be.visible')
        cy.get('img[src="/images/room2.jpg"]').should('be.visible')
    });

    it('descripción del hotel', () => {
        cy.get('.col-sm-10 > p').contains('Welcome to Shady Meadows').should('be.visible');
        cy.get('p').contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire.')
    });

    it('uso de comandos para formulario', () => {
        cy.get('.contact > :nth-child(2)').should('be.visible')
        cy.blankContact()
        cy.incorrectInput()
        cy.clearInput() 
        cy.correctInput() 
    });
    
    it('volver arriba', () => {
        cy.scrollTo('top');
    });

});