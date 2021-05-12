Cypress.Commands.add("login", () => {
    cy.visit('/backend/web/login')
    const user = {
        email: 'admin@codificar.com.br',
        password: 'qweqwe'
    }
    cy.get('#txtemail').type(user.email)
    cy.get('#txtpassword').type(`${user.password}{enter}`)

    cy.url().should('include', 'backend/web/admin/site/index')

    // cy.getCookie('_csrf').should('exist')

    // cy.setCookie('_csrf', Cypress.env('CSRF'))
    // cy.setCookie('PHPSESSID', Cypress.env('PHPSESSID'))
    // cy.setCookie('_fbp', Cypress.env('FBP'))

})
Cypress.Commands.add('loginCustomer', () => {
    cy.visit('/users/signup.html?s=true')

    cy.get('#input-email-login').type('lucas.sousa@codificar.com.br')
    cy.get('#input-password-login').type('qweqwe')

    cy.get('#btn-signin').click()

    cy.visit('/')
})