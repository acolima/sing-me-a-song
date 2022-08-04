describe('Add Song Recommendation', () => {
  before(() => {
    cy.request('POST', 'http://localhost:5000/e2e/truncate', {})
  })

  it('should add a new song recommendation', () => {
    const song = {
      name: 'As It Was - Harry Styles',
      link: 'https://www.youtube.com/watch?v=H5v3kku4y6Q'
    }

    cy.visit('http://localhost:3000')

    cy.get("input[placeholder = 'Name']").type(song.name)
    cy.get("input[placeholder ~= 'https://youtu.be/...']").type(song.link)

    cy.intercept('POST', 'http://localhost:5000/recommendations').as('newRecommendation')

    cy.get('Button').click()

    cy.wait('@newRecommendation')

    cy.contains(song.name).should('be.visible')
  })

})