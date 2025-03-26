//exercise 1
//the function, the game
function guessNumberGame() {
    let maxNumberGuess = parseFloat(prompt
        ("Let's play: guess a number, between/including 1 and X. How difficult do you want to make this? Set your X: "));
    const randomNumber = Math.floor(Math.random() * maxNumberGuess) + 1;
    console.log(`Random number is ${randomNumber}`);  //this line makes testing the code easier, comment in/out at will 
    let guessNumber = null;
    guessNumber = parseFloat(prompt(`Guess the number! It is between/including 1 and ${maxNumberGuess}`));
    while (randomNumber !== guessNumber) {
        if (randomNumber > guessNumber) {
            guessNumber = parseFloat(prompt("Ops, that is wrong. Try again, and guess higher this time: "));
        } else {
            guessNumber = parseFloat(prompt("Ops, that is wrong. Try again, and guess lower this time: ")) ;
        }
    }
    prompt("Yeyyyy, you win!! (nothing...)");
}

//Now, let's play, as many times as you like
let wantToPlay = prompt("Do you want to play? y/n");
while (wantToPlay === "y" || wantToPlay === "Y") {
    guessNumberGame();
    wantToPlay = prompt("Do you want to play again? y/n");
}
prompt("Well, go back to coding then...");
