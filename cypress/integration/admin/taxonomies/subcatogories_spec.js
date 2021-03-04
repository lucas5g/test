Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Subcatory test', () => {
    beforeEach(() => {
            cy.login()
        })
        // before(() => {
        // })
    it('List', () => {
        cy.visit('/backend/web/admin/category/manage_subcategory')
        cy.contains('Subcategorias')
    })

    it('Subcategory Create', () => {
        cy.visit('/backend/web/admin/category/create_subcategory')
            // cy.contains('Criar Subcategoria').click()
            // cy.contains
    })
})