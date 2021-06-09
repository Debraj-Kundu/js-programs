/*
Q5. Write a JavaScript function to capitalize the first letter of a string?
File name suggestion: capitalize.js
Test Data :
console.log(capitalize(‘js string exercises’)); // “Js string exercises”
*/

const capitalize = (str)=> str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize('js string exercises'));