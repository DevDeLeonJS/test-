describe('pruebiats app remota', () => {

    
    console.log('url: ', process.env.CYPRESS_baseUrl);

    it('web main online', () => {
        cy.visit('/');
    });

    it('Should be visible contente main', () => {
        cy.visit('/');
        cy.contains('Vite + React'); 
    });

});