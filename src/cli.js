import readlineSync from 'readline-sync';

function askName() { 
    const name = readlineSync.question('What is your name? ');
    return name;
};
export default askName;