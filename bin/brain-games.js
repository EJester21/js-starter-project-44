#!/usr/bin/env node
import { greet, askName, greetUser, showTask, askQuestion } from '../src/cli.js';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  greet();
  const name = askName();
  greetUser(name);
  showTask();
  for (let i = 1; i <= 3; i += 1) {
    const question = Math.floor(Math.random() * 100);
    const answer = askQuestion(question);
    if ((isEven(question) && answer === 'yes') || (!isEven(question) && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(question) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

playEvenGame();
