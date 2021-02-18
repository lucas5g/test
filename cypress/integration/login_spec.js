Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('The Login Page', () => {
    it('Sets auth cookie when loggin in via form submission', () => {

        cy.visit('/backend/web/login')

        const user = {
            email: 'admin@codificar.com.br',
            password: 'qweqwe'
        }
        cy.get('#txtemail').type(user.email)
        cy.get('#txtpassword').type(`${user.password}{enter}`)

        cy.url().should('include', 'backend/web/admin/site/index')

        cy.getCookie('_csrf').should('exist')



    })
})