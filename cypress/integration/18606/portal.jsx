Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe(' [PORTAL - STORY] Integração com correios', () => {
  //http://redmine.codificar.com.br/issues/18606


  it('Portal > checkout', () => {
    cy.loginCustomer()

    //Escolhar a localização
    cy.get('.delivery-info').click()
    cy.get('#hc7eFZHpbKN9B7ti').click()

    //Seleciona a loja
    cy.contains('Codificar Tech').click()

    //Dentro da loja codificar tech

    cy.get('#n4vwHU5jZY-noVRc > .col-sm-2 > .btn').click()
    cy.contains('Continuar para fazer pedido').click()
    cy.contains('Continuar para pagamento').click()


    //Escolher forma de entrega
    cy.contains('Correios').click()
    cy.contains('Selecione um serviço').click()
    cy.contains('SEDEX').click()

    cy.contains('Fazer pedido').click()


    console.log('')
    // cy.contains('Buscar')
  })

})