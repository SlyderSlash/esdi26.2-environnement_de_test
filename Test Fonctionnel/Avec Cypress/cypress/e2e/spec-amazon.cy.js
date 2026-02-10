describe('Amazon spec', () => {
  it('can connect to Amazon website', () => {
    cy.visit('https://app.itsasync.fr/')
  })
  it('show cookie banners', () => {
    cy.visit('https://app.itsasync.fr/')
    cy.contains('Accueil').should('be.visible')
  })
  it('show login, and refuse connection', () => {
    cy.visit('https://app.itsasync.fr/')
    cy.contains("Se connecter").should('be.visible')

  })
})