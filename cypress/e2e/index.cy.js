describe('pruebiats app remota', () => {
    it('web main online', () => {
        cy.visit('/');
    });

    it('Should be visible contente main', () => {
        cy.visit('/');
        cy.contains('Vite + React;laksd;laks;dlk;alskd'); 
    });
});