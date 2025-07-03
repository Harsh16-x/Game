let userScore = 0;
let computerScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-Score");
const computerScorePara = document.querySelector("#computer-Score");

const genComputerChoice = () => {
    const options = ["Stone", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose...  ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "orange";
    }
};

const playGame = (userChoice) => {
    //Generate  computer choice 
    const computerChoice = genComputerChoice();
   
   

    if (userChoice === computerChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Stone") {
            userWin = computerChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = computerChoice === "Scissor" ? false : true;
        } else {
            userWin = computerChoice === "Stone" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }

};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });

});