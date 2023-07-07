const { evaluateGuess } = require('../src/card');

function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses:[],
  }
  return round
}



function takeTurn(guess, round) {
  round.currentCard = round.deck[round.turns]
  const isGuessCorrect = evaluateGuess(guess, round.currentCard.correctAnswer)
  
  if (isGuessCorrect === 'Incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns++
  return isGuessCorrect
}


function calculatePercentCorrect(round) {
  let percent = ((round.turns - round.incorrectGuesses.length)/round.turns) * 100

  return percent
}

function endRound(round) {
  let percent = calculatePercentCorrect(round)
  console.log(`**Round over!** You answered ${percent}% of the questions correctly!`)
}










module.exports = {
createRound,
takeTurn,
calculatePercentCorrect,
endRound
};