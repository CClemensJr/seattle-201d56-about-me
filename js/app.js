'use strict';
const button = document.getElementById('takeQuiz');

button.addEventListener('click', event => {
  // Score counter
  let score = 0;

  // Question counter
  let totalQuestions = 7;
  // This function prompts the user to enter their name and returns the name to the function that calls it.
  function getName()
  {
    let userName = prompt('What is your name?');

    return userName;
  }

  // This function takes a number and uses that as an index to reference a question.
  // It then prompts the user for an answer to the question
  // Once an answer is obtained, it sends the question and the answer to the verifyAnswer method
  function askTrueOrFalseQuestions()
  {
    // True or False Questions
    let trueFalseQuestions = ['Did I serve in the military?',
      'Do I study martial arts?',
      'Do I play an instrument?',
      'Did I write a novel?',
      'Do I fear failure?'];
    // True or False Answers
    let trueFalseAnswers = ['YES', 'YES', 'YES', 'YES', 'NO'];
    /************
     * Ask the user yes or no questions
     */
    for (let i = 0; i < trueFalseQuestions.length; i++)
    {
      let userAnswer = prompt(`${ trueFalseQuestions[i] }`);

      console.log(`QUESTION ${ i + 1 }: ${ trueFalseQuestions[i] }`);
      console.log(`USER'S ANSWER: ${ userAnswer }`);

      if (userAnswer.toUpperCase() === trueFalseAnswers[i])
      {
        alert('That is correct!');

        console.log('The user answered correctly');

        score += 1;
      }
      else
      {
        alert('I\'m sorry, that was incorrect.');
        console.log('The user answered incorrectly');
      }


      console.log(`USER'S SCORE: ${ score }`);
    }
  }

  function askNumericalQuesion(){

    // Numerical Guess Answer
    let numberGuessAnswer = 3;
    // Numerical Guess Question
    let numberGuessQuestion = 'How many novels have I written?';
    /*****************
     * Ask the user a numerical guess question
     */
    let userAnswer = prompt(`${ numberGuessQuestion }`);

    console.log(`QUESTION 6: ${ numberGuessQuestion }`);
    console.log(`USER'S ANSWER: ${ userAnswer }`);

    if (parseInt(userAnswer) === numberGuessAnswer)
    {
      alert('That was correct!');
      console.log('The user answered correctly');

      score += 1;

      console.log(`USER'S SCORE: ${ score }`);
    }
    else
    {
      for (let i = 0; i < 3; i++)
      {
        if (parseInt(userAnswer) === numberGuessAnswer)
        {
          alert('That was correct!');
          console.log('The user answered correctly');

          score += 1;

          console.log(`USER'S SCORE: ${ score }`);

          break;
        }
        else if (parseInt(userAnswer) > numberGuessAnswer)
        {
          alert('Your guess was too high. Guess again.');
          userAnswer = prompt(`${ numberGuessQuestion }`);
        }
        else if (parseInt(userAnswer) < numberGuessAnswer)
        {
          alert('Your guess was too low. Guess again.');
          userAnswer = prompt(`${ numberGuessQuestion }`);
        }
      }
    }

  }

  function askQuestionWithMultiAnswers(){
    // Multi-Answer Question
    let multiAnswerQuestion = 'What martial art have I studied?'
    // MultiAnswer Answers
    let multiAnswerOptions = ['TAE KWAN DO', 'KARATE', 'AIKIDO', 'WING CHUN', 'JEET KUNE DO'];

    /*****************
     * Ask the user a question with many possible answers.
     */
    for (let i = 0; i < 6; i++)
    {
      let userAnswer = prompt(`${ multiAnswerQuestion }`);

      console.log(`QUESTION 7: ${ multiAnswerQuestion }`);
      console.log(`USER'S ANSWER: ${ userAnswer }`);
      if (multiAnswerOptions.includes(userAnswer.toUpperCase()))
      {
        alert('That was correct!');
        console.log('The user answered correctly');

        score += 1;

        console.log(`USER'S SCORE: ${ score }`);

        break;
      }
      else
      {
        alert('I\'m sorry, that was incorrect. Please try again.');
        console.log('The user answered incorrectly');
      }
    }


  }
  // This function takes a number and adds it to the score. It then returns the score to the function that calls it.
  function getScore(point)
  {
    score += point;

    console.log(`In getScore(). score = ${ score }`);
  }

  // This method is the main method that calls the other methods.
  function main()
  {
    let name = getName();

    askTrueOrFalseQuestions();
    askNumericalQuesion();
    askQuestionWithMultiAnswers();
    console.log(`The user got ${ score } out of ${totalQuestions} correct.`);

    alert(`Thank you for completing this questionnaire, ${ name }. You got ${ score } out of ${totalQuestions} correct.` );
  }

  main();
});
