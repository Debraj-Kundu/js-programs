/*
Q21. Write a JavaScript program to list the values of a JavaScript object.
File name suggestion: values.js
Test Data :
console.log(values({
   name : “David Rayy”,
   sclass : “VI”,
   rollno : 12
})); // David Rayy,VI,12
Hint: Use object methods
*/

const values = (obj)=> Object.values(obj);

console.log(values({
  name : 'David Rayy',
  sclass : 'VI',
  rollno : 12
}));