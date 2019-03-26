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
}

askQuestions(0);