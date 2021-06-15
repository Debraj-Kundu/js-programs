/*
Q2.  Write a JavaScript function to clone an array.
File name suggestion: arrayClone.js
Test Data :
console.log(arrayClone([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(arrayClone([1, 2, [4, 0]])); // [1, 2, [4, 0]]
*/

const arrayClone = (arr)=> [...arr];

console.log(arrayClone([1, 2, 4, 0])); 
console.log(arrayClone([1, 2, [4, 0]]));