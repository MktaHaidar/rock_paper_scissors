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

    
    if (playerSelection.toLowerCase() == choice[0].toLowerCase() && computerSelection == choice[2]) {
        console.log("You win! Rock beats scissors. " /*+ 'Your score is ' + score*/)
        let scoreUpdate = score++
    } else if (playerSelection.toLowerCase() == choice[1].toLowerCase() && computerSelection == choice[0]) {
        let scoreUpdate = score++
        console.log(`You Win! ${playerSelection} beats ${computerSelection}` /*+ ' Your score is ' + score*/)
    } else if (playerSelection.toLowerCase() == choice[2].toLowerCase() && computerSelection == choice[1]) {
        let scoreUpdate = score++
        console.log(`You Win! ${playerSelection} beats ${computerSelection}` /*+ ' Your score is ' + score*/)
    } else if (playerSelection.toLowerCase() == choice[2].toLowerCase() && computerSelection == choice[2]) {
        let scoreUpdate = score
        console.log('Draw! ' /*+ 'Your score is ' + score*/)
    } else if (playerSelection.toLowerCase() == choice[1].toLowerCase() && computerSelection == choice[1]) {
        let scoreUpdate = score
        console.log('Draw! ' /*+ 'Your score is ' + score*/)
    } else if (playerSelection.toLowerCase() == choice[0].toLowerCase() && computerSelection == choice[0]) {
        let scoreUpdate = score
        console.log('Draw! ' /*+ 'Your score is ' + score*/)
    } else {
        let scoreUpdate = score--
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.` /*+ ' Your score is ' + score*/)
    }

    //console.log(scoreUpdate)
}

let playerSelection = prompt('Choose rock, paper or scissors.');
const computerSelection = getComputerChoice();
//console.log(round(playerSelection, computerSelection))
//const gameRound = round()

function game() {
    for (let i = 0; i < 5; i++) {
        roundOfGame(playerSelection, getComputerChoice());

    }
        console.log('Your final score is ' + score)
        if (score > 0) {
            console.log("You are a winner!")
        } else {
            console.log('You lost!')
        }
    
    



}

/*function playerChoice(playerSelection) {
    let playerChoose = prompt('Choose rock, paper or scissors:')
    
    if (playerChoose == playerSelection[2]) {
        playerSelection = "SciSsoRs".toLowerCase()
    } else if (playerChoose == playerSelection[0]) {
        playerSelection = 'Rock'.toLowerCase()
    } else {
        playerSelection = 'Paper'.toLowerCase()
    }
}*/

//playerChoice()

//console.log(playerChoice)

console.log(game())



