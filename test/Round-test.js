const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');

const { createCard, evaluateGuess } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { createRound, takeTurns } = require('../src/round');


describe('round', function() {
  const deck = createDeck(data.prototypeData)
  const round = createRound(deck)
  it('should create an object', function() {
    expect(round).to.be.a("object")
  });

  it('should add a deck property to the object', function() {
    expect(round.deck).to.equal(deck)
  });

  it('should add a currentCard property as the first card in a deck', function() {
    expect(round.currentCard).to.equal(deck[0])
  });

  it('should set the turns property to 0', function() {
    expect(round.turns).to.equal(0)
  });

  it('should create an empty array for incorrectGuesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([])
  })

});

describe('takeTurn', function() {
  const deck = createDeck(data.prototypeData)
  const round = createRound(deck)
  
  it('should update the turns count', function() {
    takeTurns(round);
    expect(round.turns).to.equal(1)
  })
})