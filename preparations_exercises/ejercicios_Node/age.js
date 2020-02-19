
let rdSync = require('readline-sync');

let yourAge = Number(rdSync.question('Cual es tu edad?: '));

console.log(`In 10 years, you will be ${yourAge+10} years old.`);
console.log(`In 20 years, you will be ${yourAge+20} years old.`);
console.log(`In 30 years, you will be ${yourAge+30} years old.`);
console.log(`In 40 years, you will be ${yourAge+40} years old.`);