//console.log("Hello World!");
let randomNumber;
let computerTool;
let playerTool;
let playerWin = 0;
let computerWin = 0;

function computerPlay(randomNumber) {
    if  (randomNumber === 0) {
        computerTool = "rock";
    }
    else if (randomNumber === 1) {
        computerTool = "paper";
    }
    else {
        computerTool = "scissors";
    }
} 

function getPlayerInput() {
    console.log("Type 'rock', paper', or 'scissors' to make your choice!");
    playerTool = prompt();
    playerTool = playerTool.toLowerCase();
}

function gamePlay(playerTool, computerTool) {
    console.log("You picked: " + playerTool); 
    console.log("The computer picked: " + computerTool);

    if (playerTool === computerTool) {
        console.log("Tie!");
    }
    else if (playerTool === "rock" && computerTool === "scissors") {
        console.log("You won this round! Rock beats scissors.");
        playerWin++;
    }
    else if (playerTool === "rock" && computerTool === "paper") {
        console.log("You lost this round! Paper beats rock.");
        computerWin++;
    }
    else if (playerTool === "scissors" && computerTool === "rock") {
        console.log("You lost this round! Rock beats scissors.");
        computerWin++;
    }
    else if (playerTool === "scissors" && computerTool === "paper") {
        console.log("You won this round! Scissors beats paper.");
        playerWin++;
    }
    else if (playerTool === "paper" && computerTool === "rock") {
        console.log("You won this round! Paper beats rock.");
        playerWin++;
    }
    else if (playerTool === "paper" && computerTool === "scissors") {
        console.log("You lost this round! Scissors beats paper.");
        computerWin++;
    }
    else {
        console.log("You gave an invalid input. Try again!");
    }
}

function gameLoop() {
    while (true) {
        randomNumber = Math.floor(Math.random() * 3);
        computerPlay(randomNumber);
        getPlayerInput(); 
        gamePlay(playerTool, computerTool);
        console.log("Current score: \nYou: " + playerWin + "\nComputer: " + computerWin);
        if (playerWin === 3) {
            console.log("You won the series!!!");
            break;
        }
        if (computerWin === 3) {
            console.log("You lost the series:(");
            break;
        }
    }
}

//computerPlay(randomNumber);
//getPlayerInput();
//gamePlay(playerTool, computerTool);
console.log("Can you beat an AI in a best-of-5 RPS match? Test your might!");
gameLoop();


//console.log(computerTool);