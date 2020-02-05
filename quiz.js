/*
Goal:
Write a 5 question quiz and grade it.
*/

// Answer Count

var correct = 0;

alert("Are you ready for a quiz?");

// Ask Questions

var answer1 = prompt("What is the last name of the current President of the United States?");
if ( answer1.toUpperCase() === "TRUMP") {
    document.write("<p>1. Correct</p>");
    correct += 1;
    console.log(correct);
} else {
    document.write("<p>1. Incorrect</p>");
}

var answer2 = prompt("What is the last name of the previous President of the United States?");
if ( answer2.toUpperCase() === "OBAMA") {
    document.write("<p>2. Correct</p>");
    correct += 1;
    console.log(correct);
} else {
    document.write("<p>2. Incorrect</p>");
}

var answer3 = prompt("What is the last name of the current Vice President of the United States?");
if ( answer3.toUpperCase() === "PENCE") {
    document.write("<p>3. Correct</p>");
    correct += 1;
    console.log(correct);
} else {
    document.write("<p>3. Incorrect</p>");
}

var answer4 = prompt("What is the last name of the previous Vice President of the United States?");
if ( answer4.toUpperCase() === "BIDEN") {
    document.write("<p>4. Correct</p>");
    correct += 1;
    console.log(correct);
} else {
    document.write("<p>4. Incorrect</p>");
}

var answer5 = prompt("What year is the next Presidential Election?");
answer5 = parseInt(answer5);
if ( answer5 === 2020 ) {
    document.write("<p>5. Correct</p>");
    correct += 1;
    console.log(correct);
} else {
    document.write("<p>5. Incorrect</p>");
}

// Add total score

document.write("<p> You got " + correct + " out of 5</p>")

// Awards

if ( correct === 5 ) {
    document.write("<p><strong> Perfect Score! Great job, you get a GOLD MEDAL!</strong></p>");
} else if ( correct >= 3 ) {
    document.write("<p><strong>Well done, you get a Silver Medal!</strong></p>");
} else if ( correct >= 2 ) {
    document.write("<p><strong>You earned a Bronze Medal!</strong></p>");
} else {
    document.write("<p><strong>Study harder and you'll do better next time!</strong></p>");
}





