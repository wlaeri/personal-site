describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays my name', () => {
    cy.get('h1').first().should('have.text', 'Will Laeri')
  })

  it('links out to my email', () => {
    cy.get('a[href="mailto:wlaeri@gmail.com"]').should(
      'have.attr',
      'target',
      '_blank'
    )
  })

  it('links out to my phone', () => {
    cy.get('a[href="tel:+12038955508"]').should('have.attr', 'target', '_blank')
  })

  it('links out to my LinkedIn page', () => {
    cy.get('a[href="https://linkedin.com/in/wlaeri"]').should(
      'have.attr',
      'target',
      '_blank'
    )
  })

  it('links out to my GitHub page', () => {
    cy.get('a[href="https://github.com/wlaeri"]').should(
      'have.attr',
      'target',
      '_blank'
    )
  })

  it('links out to site source code on GitHub', () => {
    cy.get('a[href="https://github.com/wlaeri/personal-site"]').should(
      'have.attr',
      'target',
      '_blank'
    )
  })
})
