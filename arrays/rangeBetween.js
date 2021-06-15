/*
Q18. Write a JavaScript function to generate an array between two integers of ‘n’ step length. 
File name suggestion: rangeBetween.js
Test Data :
console.log(rangeBetween(4, 7, 1)); // [4, 5, 6, 7]
console.log(rangeBetween(-4, 7, 2)); // [-4, -2, 0, 2, 4, 6]
*/



const rangeBetween = (a, b, d)=>{
  let res = [];
  for(let i=a; i<= b; i+=d){
    res.push(i);
  }
  return res;
}

console.log(rangeBetween(4, 7, 1)); 
console.log(rangeBetween(-4, 7, 2)); 