function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors']
    let randomChoice = choice[Math.floor(Math.random() * choice.length)]
    return randomChoice
}

console.log(getComputerChoice())

function round(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == 'RoCk'.toLowerCase() && computerSelection == 'Scissors') {
        console.log("You win! Rock beats scissors")
    } else if (playerSelection.toLowerCase() == 'PapEr'.toLowerCase() && computerSelection == 'Rock') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection.toLowerCase() == 'Scissors'.toLowerCase() && computerSelection == 'Paper') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection.toLowerCase() == 'Scissors'.toLowerCase() && computerSelection == 'Scissors') {
        console.log('Draw!')
    } else if (playerSelection.toLowerCase() == 'PapEr'.toLowerCase() && computerSelection == 'Paper') {
        console.log('Draw!')
    } else if (playerSelection.toLowerCase() == 'RocK'.toLowerCase() && computerSelection == 'Rock') {
        console.log('Draw!')
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(round(playerSelection, computerSelection))

function game()



