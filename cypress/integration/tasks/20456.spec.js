/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('[Admin] - Atualizar outlet > Trocar texto Cadastrado por Atualizado', () => {
    before(() => {
        // cy.visit('/backend/web/admin/banner/create')
        // cy.log('https://redmine.codificar.com.br/issues/20456')

        cy.loginTest()
    })
    it('Admin > vendoroutlet > update', () => {

        // cy.viewport(550, 750)

        cy.log('https://redmine.codificar.com.br/issues/20456')

        cy.visit('/backend/web/admin/vendoroutlet/update?id=55')

        cy.title()
            .should('equal', 'Atualizar Loja Física')

        //Atualizar
        cy.get('#btnSubmitForm')
            .click()

        //Mostra modal
        cy.get('#swal2-title')
            .should('have.text', 'Sucesso!')

        cy.get('#swal2-content')
            .contains('atualizada')

        cy.get('.swal2-confirm')
            .click()

        //Verifica se foi pra lista de vendoroutlet    
        cy.url()
            .should('contain', '/backend/web/admin/vendoroutlet/index')
        cy.title()
            .should('equal', 'Loja Física')

    })
})