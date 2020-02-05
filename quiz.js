var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 20) + 1;
var guess = prompt("I'm thinking of a number between 1 and 20. What is it?")
console.log(randomNumber);

if (parseInt(guess) === randomNumber ) {
    correctGuess = true;
} else if ( parseInt(guess) > randomNumber) {
    var guessLow = prompt("Your guess was too high, my number is lower than " + guess + ".");
}    if ( parseInt(guessLow) === randomNumber) {
    correctGuess = true;
} else if ( parseInt(guess) < randomNumber) {
    var guessHigh = prompt("Your guess was too low, my number is higher than " + guess + ".");
    if ( parseInt(guessHigh) === randomNumber)
    correctGuess = true;
}

if (correctGuess) {
    document.write("<p>You guessed the number!</p>");
} else {
    document.write("<p>Sorry, that's not correct. The number was " + randomNumber + "</p>");
}