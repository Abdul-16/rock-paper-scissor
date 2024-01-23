var score = { user: 0, computer: 0, ties: 0 }
let computerInput = ''
let output = ''
function compute (userInput) {
  let rand = Math.floor(Math.random() * 9)

  if (rand < 3) {
    computerInput = 'rock'
  } else if (rand >= 3 && rand < 6) {
    computerInput = 'paper'
  } else if (rand >= 6) {
    computerInput = 'scissor'
  }

  if (
    (computerInput == 'rock' && userInput == 'paper') ||
    (computerInput == 'paper' && userInput == 'scissor') ||
    (computerInput == 'scissor' && userInput == 'rock')
  ) {
    score.user++
    output = 'You Win'
  } else if (
    (userInput == 'rock' && computerInput == 'paper') ||
    (userInput == 'paper' && computerInput == 'scissor') ||
    (userInput == 'scissor' && computerInput == 'rock')
  ) {
    score.computer++
    output = 'You Lose'
  } else {
    score.ties++
    output = 'Tie'
  }
  displayScore(userInput)
}
function displayScore (userInput) {
  let result = document.querySelector('.js-result')
  if (!userInput) {
    result.innerHTML = ''
  } else {
    result.innerHTML = `${output}`
  }
  let selection = document.querySelector('.js-selection')
  if (!userInput) {
    selection.innerHTML = ``
  } else {
    selection.innerHTML = `You chose <img src="src/${userInput}.png">, computer chose <img src="src/${computerInput}.png">`
  }
  let dislayScore = document.querySelector('.js-display-score')
  dislayScore.innerHTML = `You: ${score.user} | Computer: ${score.computer} | Ties: ${score.ties}`
}
