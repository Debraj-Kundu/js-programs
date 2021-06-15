/*
Q4. Write a JavaScript function to get the last element of an array. Passing a parameter ‘n’ will return the last ‘n’ elements of the array.
File name suggestion: last.js
Test Data :
console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2],3)); // [9, 0, -2]
console.log(last([7, 9, 0, -2],6)); // [7, 9, 0, -2]
*/

const last = (arr, n=1)=> {
  arr.reverse();
  if(n<0)
    return []
  return  arr.slice(0, n).reverse();
}

console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6)); 