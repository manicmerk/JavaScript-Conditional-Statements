var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 20) + 1;
var guess = prompt("I'm thinking of a number between 1 and 20. What is it?")

if (parseInt(guess) === randomNumber ) {
    correctGuess = true;
} 

if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else if ( guess > randomNumber ) {
    prompt("My number is lower, guess again!");
} else if ( guess < randomNumber) {
    prompt("My number is higher, guess again!");
}

if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write("<p>Sorry. The number was " + randomNumber + ".</p>");
}