Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Login without ui', () => {
    // const
    // it('should able to login', () => {
    //     cy.request({
    //         url: 'https://version.aplicativoderestaurante.com.br/backend/web/admin/site/login',
    //         method: 'POST',
    //         body: JSON.stringify({
    //             'LoginForm[admin_email]': 'admin@coficar.com.br',
    //             'LoginForm[admin_password]': 'qweqwe',
    //         })
    //     })
    //     .then(cy.visit('https://version.aplicativoderestaurante.com.br/backend/web/admin/site/index'))
    // })
    it('set cookie', () => {
        cy.setCookie('_csrf', Cypress.env('CSRF'))
        cy.setCookie('PHPSESSID', Cypress.env('PHPSESSID'))
        cy.setCookie('_fbp', Cypress.env('FBP'))

        cy.visit('https://version.aplicativoderestaurante.com.br/backend/web/admin/site/index')
    })
})