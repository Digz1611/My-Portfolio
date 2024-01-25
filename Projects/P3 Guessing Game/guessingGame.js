let secret = Math.floor(Math.random() * 20) + 1;
let guess = null;

while (guess !== secret) {
    let answer = prompt("Please guess the secret number (1-20)");

    guess = parseInt(answer);

    if (isNaN(guess)) {
        alert("Please enter a number below 1 and 20");
    } else if (guess < 1 || guess > 20) {
        alert("Please enter a number between 1 and 20");
    } else if (guess === secret) {
        alert("Correct Guess!");
    } else if (guess < secret) {
        alert("Incorrect, too low");
    } else if (guess > secret) {
        alert("Incorrect, too high");
    } else  {
        alert("Sorry, something went wrong!");
    }
}