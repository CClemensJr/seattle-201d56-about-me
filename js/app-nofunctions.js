"use strict";

// Score counter
let totalScore = 0;

// True or False Questions
let trueFalseQuestions = ["Did I serve in the military?",
                          "Do I study martial arts?",
                          "Do I play an instrument?",
                          "Have I written a novel?",
                          "Am I afraid of failure?"];

// True or False Answers
let trueFalseAnswers = ["YES", "YES", "YES", "YES", "NO"];

// Get the user's name
let userName = prompt("What is your name?");
while(userName === null)
{
    userName = prompt("What is your name?");
}

console.log(`USERNAME: ${ userName }`);

// Ask the user questions
for (let i = 0; i < trueFalseQuestions.length; i++)
{
    let userAnswer = prompt(`${ trueFalseQuestions[i] }`);

    console.log(`QUESTION ${ i + 1 }: ${ trueFalseQuestions[i] }`);
    console.log(`USER'S ANSWER: ${ userAnswer }`);
}