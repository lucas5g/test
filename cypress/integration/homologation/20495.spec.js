/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('https://redmine.codificar.com.br/issues/20495 - [VENDOR] - Adicionar caixa de e-mails no vendor', () => {
    before(() => {
        cy.loginTest()
    })

    const endpoint = 'api/v3/site/contact.html'
    it.only(Cypress.config().baseUrl + endpoint, () => {
        const obj = {
            "Contacts": {
                "contact_name": "Lucas",
                "contact_email": "lucas.sousa@codificar.com.br",
                "contact_phone": "31973056407",
                "subject": "Suporte ao pedido: 915",
                "message": "Estabelecimento - Lucas Tech"
            }
        }

        cy.request('POST', endpoint, obj)
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.message).eq('Obrigado pelo seu interesse na nossa solução. Nosso time irá entrar em contato em breve.')
                    // expect(response.body.)
            })
    })

    it('Vendor > Caixa de emails', () => {

        cy.visit('/backend/web/vendor/default/dashboard')

        //Ícone de engrenagem
        cy.get('#user-options')
            .click()

        //Caixa de emails
        cy.get('.dropdown-menu > :nth-child(3) > a')
            .click()

        //Título
        cy.get('h3 > .semi-bold')
            .should('have.text', 'Caixa de emails')



        console.log('teste')
    })


})