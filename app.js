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
        return score;
                
    }

    if (playerSelection === 'rock'){
        if(computerSelection === 'scissors') {
            computerSays("You win! Rock beats Scissors");
            score.player++;
            updateScoreBoard();
            return score;
            
        } 

        if(computerSelection === 'paper') {
            computerSays("You lose! Paper beats Rock");
            score.computer++;
            updateScoreBoard();
            return score;
         } 
    }
    
    if (playerSelection === 'paper'){
        if(computerSelection === 'rock') {
            computerSays("You win! Paper beats Rock");
            score.player++;
            updateScoreBoard();
            return score;
        } 
        
        if(computerSelection === 'scissors') {
            computerSays("You lose! Scissors beats Paper");
            score.computer++;
            updateScoreBoard();
            return score;
         } 
    }

    if (playerSelection === 'scissors'){
            if(computerSelection === 'paper') {
                computerSays("You win! Scissors beats Paper");
                score.player++;
                updateScoreBoard();
                return score;
            } 
            
            if(computerSelection === 'rock') {
                computerSays("You lose! Rock beats Scissors");
                score.computer++;
                updateScoreBoard();
                return score;
            } 
        } 

   

    

}

function computerSays(speech){
    let voice = document.querySelector('#computer-voice');
    voice.textContent = speech;
}

function updateScoreBoard(){
    let humanScore = document.querySelector('#human-score');
    let computerScore = document.querySelector('#computer-score');
    humanScore.textContent = `Human : ${score.player}`;
    computerScore.textContent = `Computer : ${score.computer}`;
    if (score.computer == 5) {
        computerSays('GAME OVER I defeated you ');
        askRematch();
    }
    if (score.player == 5){
        computerSays(' Congratulations! You defated me.... ');
        askRematch();
    }
}



function askRematch(){
    buttons.forEach(button=>{
        button.style.cssText = 'display : none';
    })
    let buttonRack = document.querySelector('#button-rack');
    let rematchButton = document.createElement('button');
    rematchButton.textContent = "Rematch?";
    buttonRack.appendChild(rematchButton)
    rematchButton.addEventListener('click', ()=> {
        buttons.forEach(button => {
            button.style.cssText = 'display : inline';
        })
        score.player = 0;
        score.computer = 0;
        updateScoreBoard();
        rematchButton.remove();
    })
}
   
