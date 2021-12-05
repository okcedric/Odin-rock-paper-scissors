const options = ['rock','paper','scissors'];
function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}

function round(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        alert("It's a tie ! ");
        return "replay"; // replay
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
    return 'replay' //

}

function game() {
    //make a score object with  player and computer attribute initialize to zero
    let score = {
        player: 0,
        computer: 0
    }

    alert(" Greetings human ! Let's play !");
    //While score.player and score.computer < 5 
    while((score.player < 5) && (score.computer < 5) ){
        // Ask the player for a choice and store it in the string variable playerSelection
        let playerSelection = prompt('Rock, paper or scissors ?');
        //Store result of round in a result string variable
        let result = round(playerSelection,computerPlay());
        // if result = replay , show score and continue the while loop
        if (result == 'replay'){
            showScore(score);
            continue;
        }
        // if result = victory, score.player++ ,show score  and continue the while loop
        if (result =='victory'){
            score.player++;
            showScore(score);
            continue;
        }
        // if result = loss, score.computer++, show score  and continue the while loop
        if(result=='loss'){
            score.computer++;
            showScore(score);
            continue;
        }
    }
    // Declare Winner
    declareWinner(score);
    // Ask for rematch
    askRematch();

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
   

game();