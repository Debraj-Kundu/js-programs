/*
Q2. Write a JavaScript function to split a string (sentence) and convert it into an array of words?
File name suggestion: stringToArray.js
Test Data :
console.log(stringToArray(“Robin Singh”)); // [“Robin”, “Singh”]
*/

const stringToArray = (str)=> str.split(' ');

console.log(stringToArray('Robin Singh'));