// 1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')

console.log(
  scoreField,
  checkButton,
  againButton,
  guessField,
  highscoreField,
  messageField,
  numberField
)

scoreField.textContent = 10

checkButton.addEventListener('click', function () {
  alert('hola  mundo')
})

function alerta() {
  alert('Me hiciste click!')
}
