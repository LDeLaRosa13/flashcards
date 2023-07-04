function createCard(id, question, answers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
}
 function evaluateGuess(guess, correctAnswer) {
  if(guess === correctAnswer) {
    return 'Correct!'
  } else {
    return 'Incorrect!'
  }
 }






// export {createCard}

module.exports = {
  createCard,
  evaluateGuess
}