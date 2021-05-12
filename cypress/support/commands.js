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
    cy.getCookie('_csrf')
        .then((cookie) => {
            cy.log(cookie.value)
        })

    cy.getCookie('PHPSESSID')
        .then((cookie) => {
            cy.log(cookie.value)
        })

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

Cypress.Commands.add('getCookies', () => {
    cy.login()
    cy.getCookie('_csrf')
        .then((cookie) => {
            cy.log(cookie.value)
        })

    cy.getCookie('PHPSESSID')
        .then((cookie) => {
            cy.log(cookie.value)
        })


})
Cypress.Commands.add('loginTest', () => {
    // cy.visit('backend/web/admin/site/index')

    cy.setCookie('_csrf', Cypress.env('CSRF'))
    cy.setCookie('PHPSESSID', Cypress.env('PHPSESSID'))
    cy.setCookie('_fbp', Cypress.env('FBP'))
})