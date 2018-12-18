let userScore = 0;
let compScore = 0;
let userScoreSpan = document.getElementById("userScore");
let compScoreSpan = document.getElementById("compScore");
let resultDiv = document.getElementById("result");
let imgRock = document.getElementById("rock");
let imgPaper = document.getElementById("paper");
let imgScissor = document.getElementById("scissor");

imgRock.addEventListener("click", function() {
    startGame('r');
});

imgPaper.addEventListener("click", function() {
    startGame('p');
});

imgScissor.addEventListener("click", function() {
    startGame('s');
});

function getCompChoice() {
    let choices = ['r','p','s'];
    return choices[Math.floor(Math.random()*3)];
}

function translateWinner(winner) {
    if(winner === "user")
        return "You";
    else if (winner === "comp")
        return "Computer";
    else
        return "No one";
}

function translateChoice(choice) {
    if(choice === "r")
        return "rock";
    else if (choice === "p")
        return "paper";
    else
        return "scissors";
}

function glow(winner) {
    if(winner === "user") {
        resultDiv.classList.add("green-glow");
        setTimeout(function() { resultDiv.classList.remove("green-glow");}, 700);
    }
    else if(winner === "comp") {
        resultDiv.classList.add("red-glow");
        setTimeout(function() { resultDiv.classList.remove("red-glow");}, 700);
    }
    else {
        resultDiv.classList.add("gray-glow");
        setTimeout(function() { resultDiv.classList.remove("gray-glow");}, 700);
    }
}

function displayResult(winner, compChoice) {
    winnerStr = translateWinner(winner);
    compChoiceStr = translateChoice(compChoice);
    resultDiv.textContent = `Computer chose ${compChoiceStr}. ${winnerStr} won!`;
    glow(winner);
}

function updateScores(winner) {
    if(winner === "user"){
        userScore++;
        userScoreSpan.textContent = userScore;
    }
    else if (winner === "comp") {
        compScore++;
        compScoreSpan.textContent = compScore;
    }
}

function determineWinner(userChoice, compChoice) {
    let winner = "None";
    switch(userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            winner = "user";
            break;
        case "rp":
        case "ps":
        case "sr":
            winner = "comp";
            break;
        default:
            break;
    }
    return winner;
}

function startGame(userChoice) {
    let compChoice = getCompChoice();
    let winner = determineWinner(userChoice, compChoice);
    updateScores(winner);
    displayResult(winner, compChoice);
}