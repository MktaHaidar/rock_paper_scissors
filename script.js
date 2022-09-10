function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors']
    let randomChoice = choice[Math.floor(Math.random() * choice.length)]
    return randomChoice
}

console.log(getComputerChoice())

function round(playerSelection, computerSelection) {
    
    let win = true
    if (playerSelection.toLowerCase() == 'RoCk'.toLowerCase() && computerSelection == 'Scissors') {
        win === true
        console.log("You win! Rock beats scissors")
    } else if (playerSelection.toLowerCase() == 'PapEr'.toLowerCase() && computerSelection == 'Rock') {
        win === true
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection.toLowerCase() == 'Scissors'.toLowerCase() && computerSelection == 'Paper') {
        win === true
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection.toLowerCase() == 'Scissors'.toLowerCase() && computerSelection == 'Scissors') {
       win === false
        console.log('Draw!')
    } else if (playerSelection.toLowerCase() == 'PapEr'.toLowerCase() && computerSelection == 'Paper') {
        win === false
        console.log('Draw!')
    } else if (playerSelection.toLowerCase() == 'RocK'.toLowerCase() && computerSelection == 'Rock') {
        win === false
        console.log('Draw!')
    } else {
        win === false
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
//console.log(round(playerSelection, computerSelection))

function game() {
    for (let i = 0; i < 5; i++) {
        round(playerSelection, getComputerChoice());
    }

    if (round)
}

console.log(game())



