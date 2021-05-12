Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Vendor Create', () => {

    it.skip('Vendor Create', () => {
        cy.login()
        cy.visit('/backend/web/admin/vendor/create')

        /**
         * Dados inicias
         
  

        /** */
        /**
         * Endereço
         */
        cy.get('#vendor-zipcode').type('30190-050')
        cy.get('#vendor-street').type('Rua dos Goitacazes')
        cy.get('#vendor-number').type('375')
        cy.get('#vendor-neighborhood').type('Centro')
        cy.get('#vendor-complement').type('Ap 14')

        cy.get('#vendor-state').select('11')
        cy.get('#vendor-city')
            .select('1630', { force: true })
            /** */

        /**
         * Contato
         /
        cy.get('#vendor-vendor_contact_name').type('Lucas de Sousa Assunção')
        cy.get('#vendor-vendor_contact_cpf')
            .type('10309785650')
            .should('have.value', '103.097.856-50')
        cy.get('#vendor-vendor_contact_number')
            .type('31973056405')
            .should('have.value', '(31) 97305-6405')
        cy.get('#vendor-vendor_contact_email').type('lucas.sousa@codificar.com.br')
        /** */

        /**
         * Dados de Login
         *
        cy.get('#vendor_user').type('lucassousa')
        cy.get('#vendor-vendor_password').type('qweqwe')
        cy.get('#vendor-confirm_password').type('qweqwe')
        /** */

        /**
         * Preço e entrega
         *
        cy.get('#vendor-delivery_time_max')
            .clear()
            .type(50)

        cy.get('#vendor-min_order_value').type(10)
        /** */
        //Produtos
        // cy.get('#vendor-auto_approve_items').select('Sim')

        // //Comissão
        // cy.get('#vendor-commission_percentage').type('10')


        // //Horario de Funcionamento
        // cy.get('#text-navTimeslot').click()

        // for (let row = 1; row <= 7; row++) {
        //     cy.get(`:nth-child(${row}) > :nth-child(1) > .flex-table > .toggle > .vue-js-switch > .v-switch-core`).click({ force: true })
        //     cy.get(`:nth-child(${row}) > :nth-child(1) > .flex-table > .open > div > .time-input`).type('24 horas')
        // }


        // cy.get('#text-navInfo').click()
        // cy.get('#btn-submit').click()
        /** */

    })

    before(() => {
        cy.login()
        cy.visit('/backend/web/admin/vendor/create')

    })

    it.skip('Informações', () => {
        cy.get('#vendor-vendor_name').type('Teste')
        cy.get('#vendor-cnpj').type('46.799.955/0001-51')
        cy.get('#s2id_autogen1').type('Música')
        cy.get('.select2-result-label').click()

        cy.get('#s2id_autogen2').type('Music')
        cy.get('.select2-result-label').click()
        cy.get('#vendor-pure_vegetarian > :nth-child(3)').click()
    })
    it.skip('Endereço', () => {
        cy.login()

        cy.get('#vendor-zipcode')
            .type('30190050')
            .should('have.value', '30190-050')
        cy.get('#findZipcode').click()


        cy.get('#vendor-street').should('have.value', 'Rua dos Goitacazes')
        cy.get('#vendor-number').type('375')
        cy.get('#vendor-neighborhood').should('have.value', 'Centro')
        cy.get('#vendor-complement').type('Ap 14')

        cy.get('#vendor-state').should('have.value', 11) //11 Minas Gerais
        cy.get('#vendor-city').should('have.value', 1630) //1630 Belo Horizonte
    })

})