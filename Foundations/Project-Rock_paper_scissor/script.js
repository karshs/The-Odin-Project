function playgame() {

    let humanScore = 0;
    let computerScore = 0;

    function computerchoice() {
        const randomValue = Math.random();
        if (randomValue < 0.33) {
            return "rock";
        } else if (randomValue < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function humanchoice() {
        let choice = prompt("Enter rock, paper, or scissors:");
        return choice;
    }


    function playround(humanchoice, computerchoice) {

        humanchoice = humanchoice.toLowerCase();

        if (humanchoice === computerchoice) {
            console.log(`its a ties ! Both chose ${humanchoice}`);

        }
        else if ((humanchoice === "rock" && computerchoice === "scissors") ||
            (humanchoice === "paper" && computerchoice === "rock") ||
            (humanchoice === "scissors" && computerchoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanchoice} beats ${computerchoice}`);
        }
        else {
            computerScore++;
            console.log(`You lose! ${computerchoice} beats ${humanchoice}`);
        }

    }


    for (let i = 0; i < 5; i++) {

        console.log(`------Round ${i + 1}------`);

        const humanselection = humanchoice();
        const computerselection = computerchoice();

        playround(humanselection, computerselection);

        console.log(`Score: Human ${humanScore}- Computer ${computerScore} `);



    }

    console.log("--- FINAL RESULT ---");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game over! The computer won.");
    } else {
        console.log("The overall game is a tie!");
    }



}


playgame();