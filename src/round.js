function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses:[]
  }
  return round
}



function takeTurns(round) {
  round.turns++
  return round
}













module.exports = {
createRound,
takeTurns
};