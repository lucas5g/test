Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe(' [ADMIN - STORY] Integração com correios', () => {
  //http://redmine.codificar.com.br/issues/18606

 
  it('Dashboard > Delivey Correios Integration', () => {
    cy.login()


    cy.visit('/backend/web/admin/settings/delivery_correios')
    cy.get('#form-correios > :nth-child(1) > :nth-child(1)').contains('Configurações de Entrega pelos Correios')

    cy.get('#settings-correios_enabled-value > :nth-child(2) > input').click()

    cy.get('.btn-primary').click()
    cy.get('#swal2-title').contains('Sucesso!')

    cy.get('.swal2-container').click()
    // console.log('teste')
  })

  it('Vendor > Habilitar correios', () => {
    cy.login()
    cy.visit('/backend/web/admin/vendor/update?id=55')

    cy.get('#vendor-delivery_correios > :nth-child(2)').click()

    cy.get('.col-md-offset-2 > #btn-submit').click()

    cy.url().should('include', '/backend/web/admin/vendor/index')

  })

})