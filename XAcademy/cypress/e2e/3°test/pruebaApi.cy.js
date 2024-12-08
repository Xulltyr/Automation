describe('pruebaApi', () => {
    it('crear usuario OK', () => {
        cy.intercept('POST', '/api/users').as('userCreado')

        cy.visit('https://conduit.bondaracademy.com/');
        cy.contains(/sign up/i).click();
        cy.get('[PlaceHolder=Username]').type('messi');    
        cy.get('[PlaceHolder=Email]').type('messi@gmail.com');
        cy.get('[PlaceHolder=Password]').type('messi123');
        cy.get('.btn').click();
        cy.wait('@userCreado').then((interception) => {
            expect(interception.response.statusCode).to.equal(201)
        });
        cy.log('vamo messi');

    });
    
    it('crear usuario MAL', () => {
        cy.intercept('POST', '/api/users').as('userWrong')

        cy.visit('https://conduit.bondaracademy.com/');
        cy.contains(/sign in/i).click();
        cy.get('[PlaceHolder=Email]').type('messi@gmail.com'); 
        cy.get('[PlaceHolder=Password]').type('messi1233');
        cy.get('.btn').click();
        cy.wait('@userWrong').then((interception) => {
            expect(interception.response.statusCode).to.equal(403)
        });
        cy.log('no loco');

    });
});