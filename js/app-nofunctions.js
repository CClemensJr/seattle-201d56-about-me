"use strict";

// Score counter
let score = 0;

// Question counter
let totalQuestions = 7;

// True or False Questions
let trueFalseQuestions = ["Did I serve in the military?",
                          "Do I study martial arts?",
                          "Do I play an instrument?",
                          "Did I write a novel?",
                          "Do I fear failure?"];
// Numerical Guess Question
let numberGuessQuestion = "How many novels have I written?";

// Multi-Answer Question
let multiAnswerQuestion = "What martial art have I studied?"

// True or False Answers
let trueFalseAnswers = ["YES", "YES", "YES", "YES", "NO"];

// Numerical Guess Answer
let numberGuessAnswer = 3;

// MultiAnswer Answers
let multiAnswerOptions = ["TAE KWAN DO", "KARATE", "AIKIDO", "WING CHUN", "JEET KUNE DO"];

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

console.log(`QUESTION 6: ${ numberGuessQuestion }`);
console.log(`USER'S ANSWER: ${ userGuess }`);

if (parseInt(userGuess) === numberGuessAnswer)
{
    alert("That was correct!");
    console.log("The user answered correctly");

    score += 1;
}
else
{
    for (let i = 0; i < 3; i++)
    {
        if (parseInt(userGuess) === numberGuessAnswer)
        {
            alert("That was correct!");
            console.log("The user answered correctly");

            score += 1;

            break;
        }
        else if (parseInt(userGuess) > numberGuessAnswer)
        {
            alert("Your guess was too high. Guess again.");
            userGuess = prompt(`${ numberGuessQuestion }`);
        }
        else if (parseInt(userGuess) < numberGuessAnswer)
        {
            alert("Your guess was too low. Guess again.");
            userGuess = prompt(`${ numberGuessQuestion }`);
        }
    }
}

// Ask the user a question with many possible answers.
userAnswer = prompt(`${ multiAnswerQuestion }`);

console.log(`QUESTION 7: ${ multiAnswerQuestion }`);
console.log(`USER'S ANSWER: ${ userAnswer }`);

for (let i = 0; i < multiAnswerOptions.length; i++)
{
    if (userAnswer.toUpperCase() === multiAnswerOptions[i])
    {
        alert("That was correct!");
        console.log("The user answered correctly");

        score += 1;

        break;
    }
}
if (parseInt(userGuess) === numberGuessAnswer)
{
    alert("That was correct!");
    console.log("The user answered correctly");
}
else
{
    for (let i = 0; i < 3; i++)
    {
        if (parseInt(userGuess) === numberGuessAnswer)
        {
            alert("That was correct!");
            console.log("The user answered correctly");

            break;
        }
        else if (parseInt(userGuess) > numberGuessAnswer)
        {
            alert("Your guess was too high. Guess again.");
            userGuess = prompt(`${ numberGuessQuestion }`);
        }
        else if (parseInt(userGuess) < numberGuessAnswer)
        {
            alert("Your guess was too low. Guess again.");
            userGuess = prompt(`${ numberGuessQuestion }`);
        }
    }
}

// Give the user their score
alert(`Thank you ${ userName } for taking the time to learn more about me. You answered ${ score } out of ${ totalQuestions } questions correctly!`);