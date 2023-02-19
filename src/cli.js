import readlineSync from 'readline-sync';

export const greet = () => console.log('Welcome to the Brain Games!');

export const askName = () => readlineSync.question('May I have your name? ');

export const greetUser = (name) => console.log(`Hello, ${name}!`);

export const showTask = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const askQuestion = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);