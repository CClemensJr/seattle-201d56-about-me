'use strict';

// This function prompts the user to enter their name and returns the name to the function that calls it.
function getName()
{
    let userName = prompt("What is your name?");

    return userName;
}

// This function takes a number and uses that as an index to reference a question.
// It then prompts the user for an answer to the question
// Once an answer is obtained, it sends the question and the answer to the verifyAnswer method
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

// This method takes a question and an answer notifies the user if their answer was correct.
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
                console.log('The user answered correctly.');

                getScore(1);
            }
            else
            {
                alert("I'm sorry, but that is incorrect. I served in the Air Force");
            }

            break;

        case 'What martial art have I studied?' :
            if (userAnswer.toUpperCase() === 'TAE KWAN DO' || 
                userAnswer.toUpperCase() === 'AIKIDO' || 
                userAnswer.toUpperCase() === 'KARATE' || 
                userAnswer.toUpperCase() === 'WING CHUN' ||
                userAnswer.toUpperCase() === 'JEET KUNE DO')
            {
                alert("That is correct! I have studied Tae Kwan Do, Aikido, Karate, Wing Chun, and Jeet Kune Do.");
                console.log('The user answered correctly.');

                getScore(1);
            }
            else
            {
                alert("I'm sorry, but that is incorrect. I have studied Tae Kwan Do, Aikido, Karate, Wing Chun, and Jeet Kune Do.");
                console.log('The user answered incorrectly');
            }

            break;

        case 'What is my favorite movie?' :
            if (userAnswer.toUpperCase() === 'THE THING')
            {
                alert(`That is correct! My favorite movie is ${ userAnswer }`);
                console.log('The user answered correctly.');

                getScore(1);
            }
            else
            {
                alert("I'm sorry, but that is incorrect. My favorite movie is John Carpenter's The Thing.");
                console.log('The user answered incorrectly');
            }

            break;

        case 'What is my favorite book?' :
            if (userAnswer.toUpperCase() === 'THE LONG WALK')
            {
                alert(`That is correct! My favorite book is ${ userAnswer }`);
                console.log('The user answered correctly.');

                getScore(1);
            }
            else
            {
                alert("I'm sorry, but that is incorrect. My favorite book is The Long Walk by Richard Bachman.");
                console.log('The user answered incorrectly');
            }

            break;

        case 'What is my favorite video game?' :
            if (userAnswer.toUpperCase() === 'NO MAN\'S SKY')
            {
                alert(`That is correct! My favorite videogame is ${ userAnswer }`);
                console.log('The user answered correctly.');

                getScore(1);
            }
            else
            {
                alert("I'm sorry, but that is incorrect. My favorite videogame is currently No Man's Sky");
                console.log('The user answered incorrectly');
            }

            break;

        default :
            console.log("A question was not successfully loaded");

            break;
    }
}

// This function takes a number and adds it to the score. It then returns the score to the function that calls it.
function getScore(point)
{
    let score;

    score += point;

    return score;
}



askQuestions(2);