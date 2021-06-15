/*
Q7. Write a JavaScript program to sort the items of an array.
File name suggestion: sortNumArr.js
TestData:
console.log(sortNumArr([3, 8, 7, 6, 5, -4, 3, 2, 1])); // [-4,-3,1,2,3,5,6,7,8]
*/

const sortNumArr = (arr)=> arr.sort((a, b)=> (a-b));

console.log(sortNumArr([3, 8, 7, 6, 5, -4, 3, 2, 1])); 