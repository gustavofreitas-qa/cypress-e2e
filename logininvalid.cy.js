describe('Serverest - Fluxo completo', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('abc@gmail.com')
    cy.get('[data-testid="senha"]').type('12345')
    cy.get('[data-testid="entrar"]').click()
  })

  it('deve fazer login com sucesso', () => {
    cy.url().should('include', 'home')
  })

  it('deve buscar produto e clicar em pesquisar', () => {
    cy.get('[data-testid="pesquisar"]').type('engenharia')
    cy.get('[data-testid="botaoPesquisar"]').click()
  })

  it('deve adicionar produto ao carrinho', () => {
    cy.get('[data-testid="pesquisar"]').type('engenharia')
    cy.get('[data-testid="botaoPesquisar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('[data-testid="adicionar carrinho"]').click()
  })

  it('deve acessar o carrinho', () => {
    cy.get('[data-testid="pesquisar"]').type('engenharia')
    cy.get('[data-testid="botaoPesquisar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('[data-testid="adicionar carrinho"]').click()
    cy.visit('https://front.serverest.dev/carrinho')
  })

  it('deve voltar ao home', () => {
    cy.get('[data-testid="home"]').click()
    cy.url().should('include', 'home')
  })

  it('deve fazer logout com sucesso', () => {
    cy.get('[data-testid="logout"]').click()
    cy.url().should('include', 'login')
  })

})