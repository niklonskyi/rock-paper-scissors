function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(userSelection, computerSelection){
    if (userSelection === computerSelection){
        return 0;
    }
    if (userSelection === 'rock' && computerSelection === 'paper'
    || userSelection === 'scissors' && computerSelection === 'rock'
    || userSelection === 'paper' && computerSelection === 'scissors'){
        return -1;
    }
    if (userSelection === 'rock' && computerSelection === 'scissors'
    || userSelection === 'scissors' && computerSelection === 'paper'
    || userSelection === 'paper' && computerSelection === 'rock'){
        return 1;
    }
}

function printResult(result){
    if (result < 0){
        return "Computer won";
    }
    else if (result > 0){
        return "User won";
    }
    else {
        return "Draw";
    }
}

let results = document.querySelector('.results')
let header = document.querySelector('.header h1')

let countWins = 0;

function game(userSelection, countRounds) {
    const computerSelection = getComputerChoice();
    if (userSelection !== undefined) {
        const round = playRound(userSelection, computerSelection);
        countWins += round;
        results.appendChild(document.createTextNode(`${printResult(round)}, ${userSelection}, ${computerSelection} \n`));
        if (countRounds >= 5) {
            if (countWins < 0) {
                header.innerHTML = 'Game is over. Computer won!';
            } else if (countWins > 0) {
                header.innerHTML = 'Game is over. User won!';
            } else {
                header.innerHTML = 'Draw!';
            }
            endGame();
        }
    }
}

function showChoices() {
    header.innerHTML = 'Rock, Paper, Scissors!';
    results.innerHTML = '';
    this.classList.add('hidden');
    for (let choice of document.querySelectorAll('.choice')){
        choice.classList.remove('hidden');
    }
}

function endGame() {
    play.classList.remove('hidden');
    play.innerHTML = 'Play again';
    for (let choice of document.querySelectorAll('.choice')){
        choice.classList.add('hidden');
    }
    resetRounds();
}

let play = document.getElementById('play');
play.addEventListener("click", showChoices);

let countRounds = 0;

function resetRounds() {
    countRounds = 0;
    countWins = 0;
}
    let userSelection = '';
    for (let choice of document.querySelectorAll(".choice")) {
        choice.addEventListener("click", function () {
            userSelection = choice.dataset.choice;
            countRounds++;
            game(userSelection, countRounds);
        });
    }


