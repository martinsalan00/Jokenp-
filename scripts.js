const result = document.querySelector('.result')

const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissor'
}

const playHuman = (humanChoice) => {
    
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {
    console.log('Humano: '+ human + 'Máquina: ' + machine)

    if(human === machine) {
        result.innerHTML = "Deu Empate!"
}

            else if(human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ||
              human === GAME_OPTIONS.ROCK && machine === GAME_OPTION.SCISSOR ||
              human === GAME_OPTIONS.SCISSOR && machine === GAME_OPTIONS.PAPER) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"

    } else  {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu para Alexa!"
    }

}