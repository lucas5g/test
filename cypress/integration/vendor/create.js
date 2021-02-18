Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Vendor Create', () => {

    it('Vendor Create', () => {
        cy.login()
        cy.visit('/backend/web/admin/vendor/create')
            // cy.get('#vendor-vendor_name').type('Teste')

        // cy.get('#vendor-cnpj').type('46.799.955/0001-51')

        // cy.get('#s2id_autogen1').type('Música')
        // cy.get('.select2-result-label').click()

        // cy.get('#s2id_autogen2').type('Music')
        // cy.get('.select2-result-label').click()



        // cy.get('#vendor-zipcode').type('30190-050')
        // cy.get('#vendor-street').type('Rua dos Goitacazes')
        // cy.get('#vendor-number').type('375')
        // cy.get('#vendor-neighborhood').type('Centro')
        // cy.get('#vendor-complement').type('Ap 14')

        // cy.get('#vendor-state').select('11')
        // cy.get('#vendor-city')
        //     .select('1630', { force: true })

        // cy.get('#vendor-vendor_contact_name').type('Lucas de Sousa Assunção')


        cy.get('#vendor-vendor_contact_cpf')
            .type('10309785650')
            .should('have.value', '103.097.856-50')

        cy.get('#vendor-vendor_contact_number')
            .type('31973056405')
            .should('have.value', '(31) 97305-6405')

        cy.get('#vendor-vendor_contact_email').type('lucas.sousa@codificar.com.br')




    })

})