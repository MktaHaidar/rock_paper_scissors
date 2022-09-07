function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors']
    let randomChoice = choice[Math.floor(Math.random() * choice.length)]
    return randomChoice
}

console.log(getComputerChoice())