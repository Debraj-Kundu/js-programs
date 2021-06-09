/*
Q9. Write a JavaScript function to concatenates a given string n times (default is 1)?
File name suggestion: repeat.js
Test Data :
console.log(repeat(‘Ha!’)); // “Ha!”
console.log(repeat(‘Ha!’,2)); // “Ha!Ha!”
console.log(repeat(‘Ha!’,3)); // “Ha!Ha!Ha!”
*/

const repeat = (str, n=1)=>{
  let res = str;
  for(let i=1; i<n; i++)
    res += str;
  return res;
}

console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3)); 