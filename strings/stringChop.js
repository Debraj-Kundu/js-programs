/*
Q11. Write a JavaScript function to chop a string into chunks of a given length?
File name suggestion: stringChop.js
Test Data :
console.log(stringChop(‘w3resource’)); // [“w3resource”]
console.log(stringChop(‘w3resource’,2)); // [“w3", “re”, “so”, “ur”, “ce”]
console.log(stringChop(‘w3resource’,3)); // [“w3r”, “eso”, “urc”, “e”]
*/

const stringChop = (str, len=str.length)=>{
  let res = [];
  let i=0; 
  while(i<str.length){
    res.push(str.substr(i, len));
    i = i+len;
  }
  return res;
}

console.log(stringChop('w3resource')); 
console.log(stringChop('w3resource',2)); 
console.log(stringChop('w3resource',3)); 