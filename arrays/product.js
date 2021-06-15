/*
Q12. Write a JavaScript program to compute the product of an array of integers.
File name suggestion: product.js
TestData:
console.log(product([1, 2, 3, 4])); // 24
console.log(product([1, 4, 7, 0])); // 0
*/


const product = (arr)=> arr.reduce((acc, e)=>acc*e, 1);

console.log(product([1, 2, 3, 4])); 
console.log(product([1, 4, 7, 0])); 