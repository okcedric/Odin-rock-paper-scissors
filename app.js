const options = ['rock','paper','scissors'];
//playRound(computerPlay());

function game() {
    let score = {
        player: 0,
        computer: 0
    }

    alert(" Greetings human ! Let's play !");
    while((score.player < 5) && (score.computer < 5) ){
        
        let result = playRound();
        if (result == 'replay'){
            showScore(score);
            continue;
        }
        if (result =='victory'){
            score.player++;
            showScore(score);
            continue;
        }
        if(result=='loss'){
            score.computer++;
            showScore(score);
            continue;
        }
    }
    declareWinner(score);
    askRematch();

}


function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}

function playRound(){
    let computerSelection = computerPlay();
    let playerSelection = prompt('Rock, paper or scissors ?');
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        alert("It's a tie ! ");
        return "replay"; 
    }

    if (playerSelection === 'rock'){
        if(computerSelection === 'scissors') {
            alert("You win! Rock beats Scissors");
            return 'victory';
        } 

        if(computerSelection === 'paper') {
            alert("You lose! Paper beats Rock");
            return "loss";
         } 
    }
    
    if (playerSelection === 'paper'){
        if(computerSelection === 'rock') {
            alert("You win! Paper beats Rock");
            return 'victory';
        } 
        
        if(computerSelection === 'scissors') {
            alert("You lose! Scissors beats Paper");
            return "loss";
         } 
    }

    if (playerSelection === 'scissors'){
            if(computerSelection === 'paper') {
                alert("You win! Scissors beats Paper");
                return 'victory';
            } 
            
            if(computerSelection === 'rock') {
                alert("You lose! Rock beats Scissors");
                return "loss";
            } 
        }

   

    alert('Please enter rock, paper or scissors');
    return 'replay' 

}


function showScore(score){
    alert( `Player : ${score.player} ;\n Computer : ${score.computer}`);
}


function declareWinner(score){
    if(score.player==5) {
        alert(' Congratulations, You defated me ! ');
    } else {
        alert('GAME OVER ! I defeated you ')
    }
}

function askRematch(){
  confirm('Let\'s play again !')? game() : alert('OK Bye');
}
   
