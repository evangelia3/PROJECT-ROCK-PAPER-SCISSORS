function computerPlay() {
    let myArray = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let randomChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return randomChoice
}

function roundOfRockPaperScissors(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    
    let result
    
    if (playerSelection == 'rock' & computerSelection == 'paper') {
        result = 'lose'
    };
    if (playerSelection == 'paper' & computerSelection == 'rock') {
        result = 'win'
    };
    if (playerSelection === computerSelection) {
        result = 'tie'
    };
    if (playerSelection == 'rock' & computerSelection == 'scissors') {
        result = 'win'
    };
    if (playerSelection == 'scissors' & computerSelection == 'rock') {
        result = 'lose'
    };
    if (playerSelection == 'paper' & computerSelection == 'scissors') {
        result = 'lose'
    };
    if (playerSelection == 'scissors' & computerSelection == 'paper') {
        result = 'win'
    };
    if (result == 'win') {
        return "You win!"
    }
    else if (result == 'lose') {
        return "You lose!"
    }
    else return "It's a tie!"
    
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay()
        playerSelection = prompt("Please select: Rock, Paper or Scissors")
        result = roundOfRockPaperScissors(playerSelection, computerSelection)
        
        if (result== "You win!"){
            playerWins = playerWins + 1  
        }

        else if (result=="You lose!"){
            computerWins = computerWins + 1
        }
    }

    if (playerWins > computerWins) {
        console.log("Player wins!")
    }
    else if (computerWins > playerWins){ 
        console.log("Computer wins!")
    }
    else {
        console.log("It's a tie!")
    }
}