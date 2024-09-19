
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const winText = document.getElementById("win");
const loseText = document.getElementById("lose");
const drawText = document.getElementById("draw")

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const choices = ["rock", "paper", "scissors"];

function hideAllResults(){
    winText.classList.add("hidden");
    loseText.classList.add("hidden");
    drawText.classList.add("hidden");
}

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return "draw";
    } else if(
        (playerChoice === "rock" && computerChoice === "scissors")||
        (playerChoice === "scissors" && computerChoice === "paper")||
        (playerChoice === "paper" && computerChoice === "rock")
    ){
        return "win";
    } else {
        return "lose"
    }
}

function updatePlayerGraphics(playerChoice, computerChoice){
    player1.classList.remove("rock", "paper", "scissors");
    player2.classList.remove("rock", "paper", "scissors");

    player1.classList.add(playerChoice);
    player2.classList.add(computerChoice);
}

function addShakeAnimation(){
    player1.classList.add("shake");
    player2.classList.add("shake");
}

function removeShakeAnimation(){ 
        player1.classList.remove("shake");
        player2.classList.remove("shake");
}

function showResult(result){
    hideAllResults();
    if(result === "win"){
        winText.classList.remove("hidden");
    } else if(result === "lose"){
        loseText.classList.remove("hidden");
    } else {
        drawText.classList.remove("hidden");
    }
}

function playRound(playerChoice){
    const computerChoice = getComputerChoice();    addShakeAnimation();
    setTimeout(()=>{
        removeShakeAnimation();
        updatePlayerGraphics(playerChoice, computerChoice);
        const result = determineWinner (playerChoice, computerChoice);

        showResult(result);
        
    },1800);
    
}

rockButton.addEventListener("click", function(){
    playRound("rock")
});

paperButton.addEventListener("click", function(){
    playRound("paper")
});

scissorsButton.addEventListener("click", function(){
    playRound("scissors")
});