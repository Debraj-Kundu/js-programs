/*
Q1. Write a JavaScript function to check whether an `input` is an array or not.
File name suggestion: ifArray.js
Test Data :
console.log(ifArray(‘w3resource’)); // false
console.log(ifArray([1, 2, 4, 0])); // true
*/

const ifArray = (input)=> Array.isArray(input);

console.log(ifArray('w3resource')); 
console.log(ifArray([1, 2, 4, 0])); 