const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');

// const { createCard, evaluateGuess } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');

const deck = createDeck(data.prototypeData)
describe('deck', function() {
  it('should create a deck of cards', function() {

    expect(countCards(deck)).to.equal(30)
  })
})