Cypress.Commands.add('blankContact',(Name, Email, Phone, Subject, ContactDescription) => {
    //enviamos el formulario en blanco y corroboramos los mensajes de campos requeridos, etc
    cy.get('#submitContact').click()
    cy.get('.alert').should('be.visible')
    cy.get('p').contains('Subject must be between 5 and 100 characters.')
    cy.get('p').contains('Subject may not be blank')
    cy.get('p').contains('Name may not be blank')
    cy.get('p').contains('Message must be between 20 and 2000 characters.')
    cy.get('p').contains('Message may not be blank')
    cy.get('p').contains('Email may not be blank')
    cy.get('p').contains('Phone may not be blank')
    cy.get('p').contains('Phone must be between 11 and 21 characters.')
})

Cypress.Commands.add('incorrectInput',(Name, Email, Phone, Subject, ContactDescription) => {
    //añadimos información invalida a los inputs
    cy.get('input[placeholder="Name"]').type('asd')
    cy.get('input[placeholder="Email"]').type('asdasd')
    cy.get('input[placeholder="Phone"]').type('asdasd')
    cy.get('input[placeholder="Subject"]').type('asdasd')
    cy.get('[data-testid="ContactDescription"]').type('asdasd')
    cy.get('#submitContact').click()
    //validamos que se os muestra el mensaje de alerta
    cy.get('.alert').should('be.visible')
    cy.get('p').contains('Phone must be between 11 and 21 characters.')
    cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto')
    cy.get('p').contains('Message must be between 20 and 2000 characters.')
})

Cypress.Commands.add('correctInput',(Name, Email, Phone, Subject, ContactDescription) => {
    //añadimos información valida a los inputs
    cy.get('input[placeholder="Name"]').type('Juan Pérez')
    cy.get('input[placeholder="Email"]').type('juan@gmail.com')
    cy.get('input[placeholder="Phone"]').type('35123696457')
    cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha X')
    cy.get('[data-testid="ContactDescription"]').type('loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo') 
    cy.get('#submitContact').click()
})

Cypress.Commands.add('clearInput', (Name, Email, Phone, Subject, ContactDescription) => {
    //Limpiamos los inputs
    cy.get('input[placeholder="Name"]').clear()
    cy.get('input[placeholder="Email"]').clear()
    cy.get('input[placeholder="Phone"]').clear()
    cy.get('input[placeholder="Subject"]').clear()
    cy.get('[data-testid="ContactDescription"]').clear()
})