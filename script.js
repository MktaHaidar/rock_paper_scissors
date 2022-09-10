let choice = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    //let choice = ['Rock', 'Paper', 'Scissors']
    let randomChoice = choice[Math.floor(Math.random() * choice.length)]
    return randomChoice
}

let score = 0

let scoreUpdate

console.log(getComputerChoice())



function roundOfGame(playerSelection, computerSelection) {

    
    if (playerSelection.toLowerCase() == 'Rock'.toLowerCase() && computerSelection == choice[2]) {
        console.log("You win! Rock beats scissors. " + 'Your score is ' + score )
    } else if (playerSelection.toLowerCase() == 'PapEr'.toLowerCase() && computerSelection == choice[0]) {
        let scoreUpdate = score++
        console.log(`You Win! ${playerSelection} beats ${computerSelection}` + ' Your score is ' + score)
    } else if (playerSelection.toLowerCase() == 'Scissors'.toLowerCase() && computerSelection == choice[1]) {
        let scoreUpdate = score++
        console.log(`You Win! ${playerSelection} beats ${computerSelection}` + ' Your score is ' + score)
    } else if (playerSelection.toLowerCase() == 'Scissors'.toLowerCase() && computerSelection == choice[2]) {
        let scoreUpdate = score
        console.log('Draw! ' + 'Your score is ' + score)
    } else if (playerSelection.toLowerCase() == 'PapEr'.toLowerCase() && computerSelection == choice[1]) {
        let scoreUpdate = score
        console.log('Draw! ' + 'Your score is ' + score)
    } else if (playerSelection.toLowerCase() == 'RocK'.toLowerCase() && computerSelection == choice[0]) {
        let scoreUpdate = score
        console.log('Draw! ' + 'Your score is ' + score)
    } else {
        let scoreUpdate = score--
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.` + ' Your score is ' + score)
    }

    console.log(scoreUpdate)
}

const playerSelection = "SciSsoRs".toLowerCase();
const computerSelection = getComputerChoice();
//console.log(round(playerSelection, computerSelection))
//const gameRound = round()

function game() {
    for (let i = 0; i < 5; i++) {
        roundOfGame(playerSelection, getComputerChoice());

    }
        if (score > 2) {
            console.log("You are a winner!")
        } else {
            console.log('You lost!')
        }



}

console.log(game())



