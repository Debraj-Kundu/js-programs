/*
Q4. Write a JavaScript function to parameterize a string?
File name suggestion: stringParameterize.js
Test Data :
console.log(stringParameterize(“Robin Singh from USA.“)); // “robin-singh-from-usa”
*/


const stringParameterize = (str)=> str.replaceAll(' ', '-');

console.log(stringParameterize('Robin Singh from USA.'));