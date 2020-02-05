/*
The Random Number Guessing Game 
Generates a number between 1 and 20
and gives players 2 attempts with a clue
to guess the number correctly
*/

// assume the player didn't guess correctly
var correctGuess = false;

// generate a number from 1 - 20
var randomNumber = Math.floor(Math.random() * 20) + 1;

var guess = prompt("I'm thinking of a number between 1 and 20. What is it?")

// added to improve my ability to debug
console.log(randomNumber);

/* test to see if player is
1. correct
2. guessed to low
3. guessed to high
*/

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

// test if player is correct or not and display proper message
if (correctGuess) {
    document.write("<p>You guessed the number!</p>");
} else {
    document.write("<p>Sorry, that's not correct. The number was " + randomNumber + "</p>");
}

/*
I can compare multiple boolean conditions using && or ||
&& between variables (age < '35' && age < '40') means both conditions must be true for the value to be returned as true.
|| between variable (age < '35 || age < '40') means one or the other value must be true for the value to be returned as true.
*/



