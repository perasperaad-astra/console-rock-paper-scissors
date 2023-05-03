function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * 3 + 1); 
    return choices[random - 1]; 
}


function playGame(playerSelection, computerSelection){
    if (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
        throw new Error("You did not select a valid item! Refresh to play again."); 
    }

    if (playerSelection == computerSelection) {
       return "You tie!"; 
    } else {
        let selectionMessage = `The computer chose ${computerSelection}.`; 
        console.log(selectionMessage)
        if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                return "You win! Rock beats scissors"
            } else if (computerSelection == "paper") {
                return "You lose! Paper beats rock"
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                return "You lose! Rock beats scissors!"
            } else if (computerSelection == "paper") {
                return "You win! Scissors beats paper"
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                return "You lose! Scissors beats paper"
            } else if (computerSelection == "rock") {
                return "You win! Paper beats rock"
            }
        }
    }
}

function game() {
     let playerWins = 0; 
     let computerWins = 0; 
     
     for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(); 
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase(); 
        if (playerSelection !== undefined) {
            let winnerMessage = playGame(playerSelection, computerSelection); 
            console.log(`You chose ${playerSelection}`)
            console.log('winner message is ', winnerMessage); 
            
            let winner = winnerMessage.split(" ")[1]; 
            if (winner == "win!") {
                playerWins +=1; 
            } else if (winner = "lose!") {
                computerWins +=1; 
            }
        }
    }

     if (playerWins > computerWins) {
        console.log(`Congrats! You won ${playerWins} of the 5 rounds!`)
     } else if (computerWins > playerWins) {
        console.log(`The computer won ${computerWins} for the 5 rounds!`)
     }
 
     
}

game();