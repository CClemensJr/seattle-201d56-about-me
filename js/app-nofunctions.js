"use strict";

// Score counter
let score = 0;

// Question counter
let totalQuestions = 6;

// True or False Questions
let trueFalseQuestions = ["Did I serve in the military?",
                          "Do I study martial arts?",
                          "Do I play an instrument?",
                          "Have I written a novel?",
                          "Am I afraid of failure?"];
// Numerical Guess Question
let numberGuessQuestion = "How many novels have I written?";

// True or False Answers
let trueFalseAnswers = ["YES", "YES", "YES", "YES", "NO"];

// Numerical Guess Answer
let numberGuessAnswer = 3;

// Get the user's name
let userName = prompt("What is your name?");
while(userName === null)
{
    userName = prompt("What is your name?");
}

console.log(`USERNAME: ${ userName }`);

// Ask the user yes or no questions
for (let i = 0; i < trueFalseQuestions.length; i++)
{
    let userAnswer = prompt(`${ trueFalseQuestions[i] }`);

    console.log(`QUESTION ${ i + 1 }: ${ trueFalseQuestions[i] }`);
    console.log(`USER'S ANSWER: ${ userAnswer }`);

    if (userAnswer.toUpperCase() === trueFalseAnswers[i])
    {
        alert("That is correct!");

        console.log("The user answered correctly");

        score += 1;
    }
    else
    {
        alert("I'm sorry, that was incorrect.");
        console.log("The user answered incorrectly");
    }

    
    console.log(`USER'S SCORE: ${ score }`);
}

// Ask the user a numerical guess question
let userGuess = prompt(`${ numberGuessQuestion }`);

console.log(`QUESTION 7: ${ numberGuessQuestion }`);
console.log(`USER'S ANSWER: ${ userGuess }`);

if (parseInt(userGuess) === numberGuessAnswer)
{
    alert("That was correct!");
    console.log("The user answered correctly");
}
else
{
    for (let i = 0; i < 3; i++)
    {
        if (parseInt(userGuess) > numberGuessAnswer)
        {
            alert("Your guess was too high. Guess again.");
            userGuess = prompt(`${ numberGuessQuestion }`);
        }
    }
}

// Give the user their score
alert(`Thank you ${ userName } for taking the time to learn more about me. You answered ${ score } out of ${ totalQuestions } questions correctly!`);