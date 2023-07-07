const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, takeTurn } = require('../src/round');


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
  
  it('should update the turns count', function() {
    const round = createRound(deck)

    takeTurn('sea otter', round)
    expect(round.turns).to.equal(1)
    takeTurn('spleen', round)
    expect(round.turns).to.equal(2)
  })

  
  it('should make next card the current card', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(3, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck)
    takeTurn('sea otter', round)
    expect(round.currentCard.id).to.equal(1)
    takeTurn('spleen', round)
    expect(round.currentCard.id).to.equal(2)
    })
    
    it('should evaluate the guess and return Incorrect when incorrect', function() {
      const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = createCard(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = createCard(3, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
      
      const deck = createDeck([card1, card2, card3])
      
      const round = createRound(deck)
      takeTurn('sea otter', round)
      takeTurn('spleen', round)
      
      expect(round.incorrectGuesses).to.deep.equal([2])
    })
  })
