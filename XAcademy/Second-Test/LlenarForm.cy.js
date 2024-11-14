describe('Algunos métodos', { testIsolation: false }, () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignorar errores de script de origen cruzado
        if (err.message.includes('Script error.')) {
          return false;
        }
        // Permitir que otras excepciones sean capturadas
        return true;
      });
      
    before('Borrar cookies y cargar la página', () => {
        cy.clearCookies();
        cy.visit('https://demoqa.com/');
        cy.title().should('eq', 'DEMOQA');
    });

    it('Navegar al formulario de práctica', () => {
        // Navegar a la sección del formulario
        cy.get('h5').contains('Elements').click();
        cy.get('span').contains('Forms').click();
        cy.get('span').contains('Practice Form').click();

        // Validar la presencia de la imagen
        cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible');
    });

    it('Validar y completar el formulario', () => {
        // Enviar el formulario para activar las validaciones
        cy.get('#submit').click();

        // Comprobar campos inválidos
        cy.get('#firstName:invalid').should('exist');
        cy.get('#lastName:invalid').should('exist');

        // Rellenar los campos con un pequeño retraso
        cy.get('#firstName').type('Ignacio', { delay: 100 }).should('have.value', 'Ignacio');
        cy.get('#lastName').type('Moreno', { delay: 100 }).should('have.value', 'Moreno');
        cy.get('#userNumber').type('19382746', { delay: 100 }).should('have.value', '1234567890');

        // Seleccionar un género
        cy.get('label[for="gender-radio-1"]').click();

        // Manejar las casillas de verificación de pasatiempos
        cy.get('label[for="hobbies-checkbox-1"]').click();
        cy.get('label[for="hobbies-checkbox-1"]').click();
        cy.get('label[for="hobbies-checkbox-2"]').click();
        
        // Subir un archivo (asegúrate de que la ruta del archivo sea correcta)
        cy.get('#uploadPicture').selectFile('cypress/fixtures/test.jpg');

        // Asegurarse de que el campo ciudad esté deshabilitado inicialmente
        cy.get('#city input').should('be.disabled');

        // Seleccionar un estado del desplegable
        cy.get('div').contains('Select State').click();
        cy.get('#react-select-3-option-1').click();

        // Enviar el formulario y validar el envío
        cy.get('#submit').click();
        // Desplazarse al botón para asegurarse de que esté visible
        cy.get('#closeLargeModal').scrollIntoView().should('be.visible').click();

    });

});
