/*
Q3. Write a JavaScript function to get the first ‘n’ elements of an array. Passing a parameter ‘n’ will return the first ‘n’ elements of the array. 
File name suggestion: first.js
Test Data :
console.log(first([7, 9, 0, -2])); // 7
console.log(first([],3)); // []
console.log(first([7, 9, 0, -2],3)); // [7, 9, 0]
console.log(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3)); // []
*/

const first = (arr, n=1)=> {
  if(n<0)
    return []
  return  arr.slice(0, n);
};

console.log(first([7, 9, 0, -2])); 
console.log(first([],3)); 
console.log(first([7, 9, 0, -2],3)); 
console.log(first([7, 9, 0, -2],6)); 
console.log(first([7, 9, 0, -2],-3)); 