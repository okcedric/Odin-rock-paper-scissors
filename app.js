const options = ['Rock','Paper','Scissors'];
function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}

for ( let i=0; i< 100;i++) {
    console.log(computerPlay());
}