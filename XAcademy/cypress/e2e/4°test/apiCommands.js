Cypress.Commands.add('completeFormOk', (type = 'valid') => { 
    cy.fixture('datos').then((data) => {
        const formData = data[type]
    cy.intercept('POST', 'https://automationintesting.online/message').as('testAPI')
   
   
    cy.get('input[placeholder="Name"]').clear().type(formData.name)
    cy.get('input[placeholder="Email"]').clear().type(formData.email)
    cy.get('input[placeholder="Phone"]').clear().type(formData.phoneNumber)
    cy.get('input[placeholder="Subject"]').clear().type(formData.subject)
    cy.get('[data-testid="ContactDescription"]').clear().type(formData.message) 
    cy.get('#submitContact').click()
    cy.wait('@testAPI').its('response.statusCode').should('eq', 201)
})

})

Cypress.Commands.add('completeForm', (type,api) => { 
    cy.fixture('datos').then((data)=> {
        const formData = data[type]
        cy.log(formData)
    cy.intercept('POST', 'https://automationintesting.online/message').as('testAPI')
    cy.get('input[placeholder="Name"]').clear().type(formData.name)
    cy.get('input[placeholder="Email"]').clear().type(formData.email)
    cy.get('input[placeholder="Phone"]').clear().type(formData.phoneNumber)
    cy.get('input[placeholder="Subject"]').clear().type(formData.subject)
    cy.get('[data-testid="ContactDescription"]').clear().type(formData.message) 
    cy.get('#submitContact').click()
    cy.wait('@testAPI').its('response.statusCode').should('eq', api)
    
     })
})

Cypress.Commands.add('checkErrorMessages', () => {
    cy.fixture('datos').then((data)=> {
    const formData = data['errorMessages']
        cy.get('p').contains(formData.nameBlank).should('be.visible');
        cy.get('p').contains(formData.emailBlank).should('be.visible');
    });
});