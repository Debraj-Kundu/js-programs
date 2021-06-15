/*
Q17. Write a JavaScript function to create a specified number of elements with pre-filled string value array. 
File name suggestion: createArray.js
Test Data :
console.log(createArray(3, ‘default value’)); // [“default value”, “default value”, “default value”]
console.log(createArray(4, ‘password’)); // [“password”, “password”, “password”, “password”]
*/

const createArray = (n, val)=>{
  let res = [];
  for(let i=0; i<n; i++)
    res.push(val);
  return res;
}

console.log(createArray(3, 'default value')); 
console.log(createArray(4, 'password')); 