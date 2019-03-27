"use strict";

let totalScore = 0;
let trueFalseQuestions = ["Did I serve in the military?",
                          "Do I study martial arts?",
                          "Do I play an instrument?",
                          "Have I written a novel?",
                          "Am I afraid of failure?"];
let trueFalseAnswers = ["YES", "YES", "YES", "YES", "NO"];

let userName = prompt("What is your name");

while(userName === null)
{
    userName = prompt("What is your name");
}

console.log(`USERNAME: ${ userName }`);

for (let i = 0; i < trueFalseQuestions.Length; i++)
{
    console.log(`QUESTION ${ i + 1 }: ${ trueFalseQuestions[i]}`);
}