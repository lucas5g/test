Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Vendor Create', () => {
   
    it('set cookie', () => {
        cy.setCookie('_csrf', Cypress.env('CSRF'))
        cy.setCookie('PHPSESSID', Cypress.env('PHPSESSID'))
        cy.setCookie('_fbp', Cypress.env('FBP'))
        cy.visit('backend/web/admin/vendor/create')
    })


    it('Vendor Create', () => {
      
        cy.get('#vendor-vendor_name').type('Teste')

        cy.get('#vendor-cnpj').type('46.799.955/0001-51')

        cy.get('#s2id_autogen1').type('Música')
        cy.get('.select2-result-label').click()
       
        cy.get('#s2id_autogen2').type('Music')
        cy.get('.select2-result-label').click()



        cy.get('#vendor-zipcode').type('30190-050')
        cy.get('#vendor-street').type('Rua dos Goitacazes')
        cy.get('#vendor-number').type('375')
        cy.get('#vendor-neighborhood').type('Centro')
        cy.get('#vendor-complement').type('Ap 14')

        // cy.get('#vendor-state').select('11')
        // cy.get('#vendor-city')
        //     .select('1630', {force: true})
        //     .invoke('val')
        //     .should('eq', '1630')

        cy.get('#vendor-vendor_contact_name').type('Lucas de Sousa Assunção')







    })        

})