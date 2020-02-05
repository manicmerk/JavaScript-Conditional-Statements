var randomNumber = Math.floor(Math.random() * 20) + 1;
var guess = prompt("I'm thinking of a number between 1 and 20. What is it?")

if (parseInt(guess) === randomNumber ) {
    document.write("<p>You guessed the number!</p>");
} else {
    document.write("<p>Sorry. The number was " + randomNumber + ".</p>");
}