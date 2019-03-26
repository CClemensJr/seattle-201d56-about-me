'use strict';

function getName()
{
    let userName = prompt("What is your name?");

    return userName;
}

function askQuestions(question)
{
    let myQuestions = ['What branch of the military did I serve in?',
                       'What martial art have I studied?',
                       'What is my favorite movie?',
                       'What is my favorite book?',
                       'What is my favorite video game?'];
    
    let userAnswer = prompt(`${ myQuestions[question] }`);

    console.log(`Question: ${ myQuestions[question] }`);
    console.log(`User Answer: ${ userAnswer }`)

    verifyAnswer(myQuestions[question], userAnswer);
}

function verifyAnswer(myQuestion, userAnswer)
{
    switch (myQuestion)
    {
        case 'What branch of the military did I serve in?' :
            if (userAnswer.toUpperCase() === 'USAF' || 
                userAnswer.toUpperCase() === 'U.S. AIR FORCE' || 
                userAnswer.toUpperCase() === 'AIR FORCE' || 
                userAnswer.toUpperCase() === 'CHAIR FORCE')
            {
                alert(`That is correct! I served 6 years in the ${ userAnswer }`);
            }
            else
            {
                alert("I'm sorry, but that is incorrect. I served in the Air Force");
            }

        case 'What martial art have I studied?' :
            if (userAnswer.toUpperCase() === 'TAE KWAN DO' || 
                userAnswer.toUpperCase() === 'AIKIDO' || 
                userAnswer.toUpperCase() === 'KARATE' || 
                userAnswer.toUpperCase() === 'WING CHUN' ||
                userAnswer.toUpperCase() === 'JEET KUNE DO')
            {
                alert("That is correct! I have studied Tae Kwan Do, Aikido, Karate, Wing Chun, and Jeet Kune Do.");
            }
            else
            {
                alert("I'm sorry, but that is incorrect. I have studied Tae Kwan Do, Aikido, Karate, Wing Chun, and Jeet Kune Do.");
            }
    }
}

askQuestions(0);