Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('My First Test', () => {
    it.skip('Visits the Kitchen Sink', () => {
        cy.visit('/')

        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})