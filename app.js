const options = ['rock','paper','scissors'];
let buttons = document.querySelectorAll('button');
let score = {
    player: 0,
    computer:0
}

buttons.forEach(button => {
    button.addEventListener('click',() => playRound(button.getAttribute('id')))
})


function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}



function playRound(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        computerSays("It's a tie ! ");
        return "replay"; 
    }

    if (playerSelection === 'rock'){
        if(computerSelection === 'scissors') {
            computerSays("You win! Rock beats Scissors");
            return 'victory';
        } 

        if(computerSelection === 'paper') {
            computerSays("You lose! Paper beats Rock");
            return "loss";
         } 
    }
    
    if (playerSelection === 'paper'){
        if(computerSelection === 'rock') {
            computerSays("You win! Paper beats Rock");
            return 'victory';
        } 
        
        if(computerSelection === 'scissors') {
            computerSays("You lose! Scissors beats Paper");
            return "loss";
         } 
    }

    if (playerSelection === 'scissors'){
            if(computerSelection === 'paper') {
                computerSays("You win! Scissors beats Paper");
                return 'victory';
            } 
            
            if(computerSelection === 'rock') {
                computerSays("You lose! Rock beats Scissors");
                return "loss";
            } 
        }

   

    computerSays('Please enter rock, paper or scissors');
    return 'replay' 

}

function computerSays(speech){
    let voice = document.querySelector('#computer-voice');
    voice.textContent = speech;
}

function showScore(score){
    let scoreBoard = document.querySelector('#score-board');
    scoreBoard.textContent = `Player : ${score.player} ;\n Computer : ${score.computer}`;
}


function declareWinner(score){
    if(score.player==5) {
        computerSays(' Congratulations, You defated me ! ');
    } else {
        computerSays('GAME OVER ! I defeated you ');
    }
}

function askRematch(){
  confirm('Let\'s play again !')? game() : alert('OK Bye');
}
   
