const getRandomNumber = require('./random-number');
let age = getRandomNumber(0, 100);

let printAge = () => {
    console.log(`Emma is ${age} years old`)
};

printAge();