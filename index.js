const options = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const results = [
  'Spock rompe tijera, ganas',
  'Spock rompe tijera, pierdes',
  'Tijera corta papel, ganas',
  'Tijera corta papel, pierdes',
  'Papel envuelve piedra, ganas',
  'Papel envuelve piedra, pierdes',
  'Piedra aplasta a lagarto, ganas',
  'Piedra aplasta a lagarto, pierdes',
  'Lagarto envenena a Spock, ganas',
  'Lagarto envenena a Spock, pierdes',
  'Spock vaporiza a piedra, ganas',
  'Spock vaporiza a piedra, pierdes',
  'Piedra aplasta a tijera, ganas',
  'Piedra aplasta a tijera, pierdes',
  'Tijera decapita a lagarto, ganas',
  'Tijera decapita a lagarto, pierdes',
  'Lagarto devora papel, ganas',
  'Lagarto devora papel, pierdes',
  'Papel desautoriza a Spock, ganas',
  'Papel desautoriza a Spock, pierdes',
  'No pasa nada, empate'
]

const turn = [
  [20, 4, 13, 7, 10],
  [5, 20, 2, 16, 19],
  [12, 3, 20, 15, 0],
  [6, 17, 14, 20, 9],
  [11, 18, 1, 8, 20]
]

function removeSelection (items) {
  items.forEach(item => item.removeAttribute('class'))
}

function removeSelections (event) {
  const gameboard = document.querySelector('.gameboard')

  if (!event || !gameboard.contains(event.target)) {
    const lastTurnHumanSelected = document.querySelectorAll('.human-selected')
    const lastTurnMachineSeleced = document.querySelectorAll('.machine-selected')
    const resultCanvan = document.querySelector('h1')
    resultCanvan.innerText = ''
    removeSelection(lastTurnHumanSelected)
    removeSelection(lastTurnMachineSeleced)
  }
}

function play (human) {
  removeSelections()
  const machine = Math.floor(Math.random() * 5)
  const result = turn[machine][human]
  const resultCanvan = document.querySelector('h1')
  const humanSelection = document.querySelector(`#${options[human]}`)
  const machineSelection = document.querySelector(`#${options[machine]}`)
  humanSelection.setAttribute('class', 'human-selected')
  machineSelection.setAttribute('class', 'machine-selected')
  resultCanvan.innerText = results[result]
}

document.querySelector('main').addEventListener('click', removeSelections)
