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
                return `You tied! Both players picked Rock`;

            }

        case 'paper':
            if (computerSelection === 'rock') {
                return `You win! Paper beats rock`;
            }
            else if (computerSelection === 'scissors') {
                return `You lose! Scissors beats Paper`;
            }
            else {
                return `You tied! Both players picked Paper`;
            }

        case 'scissors':
            if (computerSelection === 'paper') {
                return `You win! Scissors beats Paper`;
            }
            else if (computerSelection === 'rock') {
                return `You lose! Rock beats Scissors`;
            }
            else {
                return `You tied! Both players picked Scissors`;
            }
    }
}

function rpsGame(choice) {

    const npc = getComputerChoice();
    const result = playRound(choice, npc);

    const winnerDiv = document.querySelector('.winner-text');
    if (winnerDiv.firstChild) {
        const playerScore = document.querySelector('#playerScore');
        const npcScore = document.querySelector('#npcScore');
        playerScore.textContent = 0;
        npcScore.textContent = 0;
        winnerDiv.removeChild(winnerDiv.firstChild);
    }

    const playerScore = document.querySelector('#playerScore');
    const npcScore = document.querySelector('#npcScore');
    const resultDiv = document.querySelector('.result-text');
    const resultPara = document.createElement('p');

    resultPara.textContent = result;
    resultPara.setAttribute('style', 'font-size: 24px; font-weight: bold;');
    
    if(result.includes("win")){
        resultPara.style.color = 'green';
        let score = parseInt(playerScore.textContent) + 1;
        playerScore.textContent = score;

        if (score === 5){
            rpsReset('player');
        }
    }
    else if (result.includes("lose")){
        resultPara.style.color = 'red';
        let score = parseInt(npcScore.textContent) + 1;
        npcScore.textContent = score;

        if (score === 5) {
            rpsReset('npc');

        }
    }
    else{
        resultPara.style.color = 'gray';
    }

    if(!resultDiv.firstChild){
        resultDiv.appendChild(resultPara);
    }
    else{
        resultDiv.removeChild(resultDiv.firstChild);
        resultDiv.appendChild(resultPara);
    }


}

function rpsReset(winner){
    const winnerDiv = document.querySelector('.winner-text');
    winnerDiv.setAttribute('style', 'font-size: 32px; font-weight: bold;');

    if(winner === 'player'){
        winnerDiv.style.color = 'green';
        winnerDiv.textContent = 'Congratulation you won 5 rounds!';
    }
    else if (winner === 'npc'){
        winnerDiv.style.color = 'red';
        winnerDiv.textContent = 'The computer beat you to 5 rounds!';        
    }

}

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', () => rpsGame('rock'));
paperButton.addEventListener('click', () => rpsGame('paper'));
scissorsButton.addEventListener('click', () => rpsGame('scissors'));