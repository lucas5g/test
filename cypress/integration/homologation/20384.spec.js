/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('[ADMIN] - BANNERS > Não aparece o produto para fazer o vínculo ao banner', () => {
    before(() => {
        // cy.visit('/backend/web/admin/banner/create')

        cy.loginTest()
    })

    it('Admin > Banner', () => {
        cy.log('https://redmine.codificar.com.br/issues/20384')

        cy.visit('/backend/web/admin/banner/create')

        cy.title()
            .should('equal', 'Criar Banner')

        cy.contains('Título do Banner')
            .click()
            .type('Teste banner')

        //Localização
        cy.get('#banner-location_id')
            .select('Belo horizonte')

        //Tipo do Banner
        cy.get('#banner-banner_type')
            .select('app')


        //Tela de Destino do Banner
        cy.get('#banner-banner_screen_app')
            .select('Tela de Detalhe do(a) Produtos')

        //Busca por Estabelecimento
        cy.get('#input_vendor')
            .type('Codificar Tech')

        //Busca por Loja Física
        cy.get('#banner-banner_search_vendor_outlet')
            .type('')

        //Busca por Loja Física
        cy.get('')

        //Imagem do Banner
        cy.get('#banner-banner_image')
            .click()




    })
})