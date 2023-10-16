const PlayerSelection=document.getElementById("PlayerSelection");
const ComputerSelection=document.getElementById("ComputerSelection");
const Winner=document.getElementById("Winner");
const Choose=document.querySelectorAll(".choose");
let player;
let computer;


Choose.forEach(button => button.addEventListener("click",() => {

    player=button.textContent;
    computerTurn();
    PlayerSelection.textContent=`PlayerSelection: ${player}`
    ComputerSelection.textContent=`ComputerSelection: ${computer}`
    Winner.textContent=`Winner: `+ checkWinner();
}))

function computerTurn(){
    const randnum = Math.floor(Math.random() *3)+1;
    
    switch(randnum){
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS"
            break;
    }
}

function checkWinner(){
    if(player==computer){
        return "Draw";
    }
    else if(computer=="ROCK"){
        return(player=="PAPER")? "YOU WIN!" : "YOU LOSE :("
    }
    else if(computer=="PAPER"){
        return(player=="SCISSORS")? "YOU WIN!" : "YOU LOSE :("
    }
    else if(computer=="SCISSORS"){
        return(player=="ROCK")? "YOU WIN!" : "YOU LOSE :("
    }
}