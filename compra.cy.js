describe('Fluxo de compra robusto', () => {

  it('login + compra completa', () => {

    // login
    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').should('be.visible').type('standard_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // garante que entrou
    cy.url().should('include', 'inventory')

    // adiciona produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should('be.visible')
      .click()

    // abre carrinho
    cy.get('.shopping_cart_link').click()

    cy.contains('Sauce Labs Backpack').should('be.visible')

    // checkout
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Joao')
    cy.get('[data-test="lastName"]').type('Silva')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()

    // valida final
    cy.contains('Thank you for your order')
      .should('be.visible')
  })

})