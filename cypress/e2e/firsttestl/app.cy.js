/* global cy */

describe('Pokedex', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:5007')
    cy.contains('pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})