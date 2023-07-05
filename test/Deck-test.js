const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');

const { createCard, evaluateGuess } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');

describe('deck', function() {
  it('should create a deck of cards', function() {
    const decks = createDeck(data.prototypeData)

    expect(countCards(decks)).to.equal(30)
  })
})