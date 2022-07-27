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

function game(){
    let count = 0;
    for (let i = 0; i < 5; i++){
        const userSelection = prompt('Enter your choice: ');
        const computerSelection = getComputerChoice();
        const round = playRound(userSelection, computerSelection);
        count += round;
        console.log(`${printResult(round)}, ${userSelection}, ${computerSelection}`);
    }
    if (count < 0){
        console.log('Game is over. Computer won!')
    }
    else if (count > 0){
        console.log('Game is over. User won!')
    }
    else {
        console.log('Draw!')
    }
}