function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(userSelection, computerSelection){
    userSelection = userSelection.toLowerCase().trim();
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

function game(userSelection) {
    let count = 0;
    const computerSelection = getComputerChoice();
    if (userSelection !== undefined) {
        const round = playRound(userSelection, computerSelection);
        count += round;
        console.log(`${printResult(round)}, ${userSelection}, ${computerSelection}`);
        if (count < 0) {
            console.log('Game is over. Computer won!')
        } else if (count > 0) {
            console.log('Game is over. User won!')
        } else {
            console.log('Draw!')
        }
    }
}

function showChoices() {
    this.classList.add('hidden');
    for (let choice of document.querySelectorAll('.choice')){
        choice.classList.remove('hidden');
    }
}

let play = document.getElementById('play');
play.addEventListener("click", showChoices);


    for (let choice of document.querySelectorAll(".choice")) {
        choice.addEventListener("click", function (){
            let userSelection = choice.dataset.choice;
            game(userSelection);
        });
    }

