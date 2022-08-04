describe('Votes', () => {
  let song = {}

  before(() => {
    cy.request('GET', 'http://localhost:5000/recommendations').then((response) => {
      song = {
        id: response.body[0].id,
        name: response.body[0].name,
        score: response.body[0].score
      }
    })
  })

  it('should be able to Upvote', () => {
    cy.visit('http://localhost:3000')

    cy.intercept('POST', `http://localhost:5000/recommendations/${song.id}/upvote`).as('upvote')
    cy.contains(song.name).parent().get('#upvote').click()
    cy.wait('@upvote').its('response.statusCode').should('eq', 200)
    cy.contains(song.name).parent().contains(song.score + 1)
  })

  it('should be able to Downvote', () => {
    cy.visit('http://localhost:3000')

    cy.intercept('POST', `http://localhost:5000/recommendations/${song.id}/downvote`).as('downvote')
    cy.contains(song.name).parent().get('#downvote').click()
    cy.wait('@downvote').its('response.statusCode').should('eq', 200)
    cy.contains(song.name).parent().contains(song.score)
  })

})