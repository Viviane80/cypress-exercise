
describe('placeholder', () => {
  it('loads home page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a').click
    cy.get('button').click()
    cy.url().should('include', 'Try React')

    cy.visit('https://example.cypress.io/todo')
    cy.contains('Commands').click
    cy.contains('Actions').click
    cy.url().should('include', '.type()')
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
