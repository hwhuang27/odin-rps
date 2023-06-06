function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1: return 'Rock';
        case 2: return 'Paper';
        case 3: return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                return `You win! Rock beats Scissors`;
            }
            else if (computerSelection === 'paper') {
                return `You lose! Paper beats Rock`;
            }
            else {
                return `You tied! Both players picked ${playerSelection}`;

            }

        case 'paper':
            if (computerSelection === 'rock') {
                return `You win! Paper beats rock`;
            }
            else if (computerSelection === 'scissors') {
                return `You lose! Scissors beats Paper`;
            }
            else {
                return `You tied! Both players picked ${playerSelection}`;
            }

        case 'scissors':
            if (computerSelection === 'paper') {
                return `You win! Scissors beats Paper`;
            }
            else if (computerSelection === 'rock') {
                return `You lose! Rock beats Scissors`;
            }
            else {
                return `You tied! Both players picked ${playerSelection}`;
            }
    }
}

function rpsGame() {
    for (let index = 0; index < 5; index++) {
        let choice = prompt("Rock, paper or scissors?");
        // choice = choice.toLowerCase();
        let npc = getComputerChoice();
        console.log(playRound(choice, npc));
    }
}

rpsGame();

