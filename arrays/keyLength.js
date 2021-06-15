/*
Q22. Write a JavaScript program to get the length of a JavaScript object. 
File name suggestion: keyLength.js
Test Data :
console.log(keyLength({
   name : “David Rayy”,
   sclass : “VI”,
   rollno : 12
})); // 3
Hint: Use object methods
*/

const values = (obj)=>Object.keys(obj).length;

console.log(values({
  name : 'David Rayy',
  sclass : 'VI',
  rollno : 12
}));