Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Test Login', () => {
    it.skip('Add user and password', () => {
        cy.visit('/users/signup.html?s=true')
        cy.get('#input-email-login').type('lucas.sousa@codificar.com.br')
        cy.get('#input-password-login').type(`qweqwe{enter}`)
            // cy.get('#btn-signin').click()
            // cy.get('#btn-signin').click()



    })
})