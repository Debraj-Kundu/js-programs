/*
Q11. Write a JavaScript program to compute the sum of an array of integers.
File name suggestion: sum.js
TestData:
console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([0, 0, 0, 1])); // 1
*/


const sum = (arr)=> arr.reduce((acc, e)=> acc+e);

console.log(sum([1, 2, 3, 4])); 
console.log(sum([0, 0, 0, 1])); 