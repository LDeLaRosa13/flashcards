const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const {createCard, } = require('./card'); 
const { createDeck, countCards } = require('../src/deck');
const { createRound, takeTurn } = require('../src/round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const cards = prototypeQuestions.map((card) => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer)
  })
  const deck = createDeck(cards)
  const round1 = createRound(deck)

  printMessage(deck)
  printQuestion(round1)
}

module.exports = { 
  printMessage, 
  printQuestion,
  start
};
