

const rockButton = document.querySelector('#rock');

rockButton.addEventListener('click', (e) => {
    let playerChoice = e.target.id; 
    playGame(playerChoice, getComputerChoice()); 
});

const paperButton = document.querySelector('#paper');

paperButton.addEventListener('click', (e) => {
    let playerChoice = e.target.id; 
    playGame(playerChoice, getComputerChoice()); 
});

const scissorsButton = document.querySelector('#scissors');

scissorsButton.addEventListener('click', (e) => {
    let playerChoice = e.target.id; 
    playGame(playerChoice, getComputerChoice()); 
});



function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * 3 + 1); 
    return choices[random - 1]; 
}

let compScoreTotal = 0; 
let playerScoreTotal = 0; 

function playGame(playerSelection, computerSelection){

    let selectionMessage = `The computer chose ${computerSelection}.`; 
    let selectionDiv = document.querySelector("#selection"); 
    selectionDiv.textContent = selectionMessage; 
    let winnerDiv = document.querySelector("#winner")

    if (playerSelection == computerSelection) {
       winnerDiv.textContent= "You tie!"; 
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
                 winnerDiv.textContent = "You win! Rock beats scissors"; 
                 playerScoreTotal +=1; 
            } else if (computerSelection == "paper") {
                winnerDiv.textContent= "You lose! Paper beats rock"
                compScoreTotal +=1; 
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                winnerDiv.textContent= "You lose! Rock beats scissors!"
                compScoreTotal +=1; 
            } else if (computerSelection == "paper") {
                winnerDiv.textContent= "You win! Scissors beats paper"
                playerScoreTotal +=1; 
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                winnerDiv.textContent= "You lose! Scissors beats paper"
                compScoreTotal +=1; 
            } else if (computerSelection == "rock") {
                winnerDiv.textContent= "You win! Paper beats rock"
                playerScoreTotal +=1; 
            }
        }
    }

    let scoreDiv = document.querySelector('#score');
    scoreDiv.textContent = `Computer's total wins: ${compScoreTotal}
        Your total wins: ${playerScoreTotal}`

    if (compScoreTotal == 5 || playerScoreTotal == 5) {
        let overallWinnerDiv = document.querySelector("#overallWinner"); 
        if (compScoreTotal == 5) {
            overallWinnerDiv.textContent = "The computer is the overall winner! They won 5 rounds."
        } else if (playerScoreTotal == 5) {
            overallWinnerDiv.textContent = "You are the overall winner! You won 5 rounds."
        }
        //reset everything 
        compScoreTotal = 0; 
        playerScoreTotal = 0; 
    }

 
}


// function game() {
//      let playerWins = 0; 
//      let computerWins = 0; 

     
//      for (let i = 0; i < 5; i++) {
//         let computerSelection = getComputerChoice(); 
//         let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase(); 
//         if (playerSelection !== undefined) {
//             let winnerMessage = playGame(playerSelection, computerSelection); 
//             console.log(`You chose ${playerSelection}`)
//             console.log('winner message is ', winnerMessage); 
            
//             let winner = winnerMessage.split(" ")[1]; 
//             if (winner == "win!") {
//                 playerWins +=1; 
//             } else if (winner = "lose!") {
//                 computerWins +=1; 
//             }
//         }
//     }

//      if (playerWins > computerWins) {
//         console.log(`Congrats! You won ${playerWins} of the 5 rounds!`)
//      } else if (computerWins > playerWins) {
//         console.log(`The computer won ${computerWins} for the 5 rounds!`)
//      }
 
     
// }

// game();
