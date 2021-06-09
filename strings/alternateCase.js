/*
Q8. Write a JavaScript function that takes a string which can have both lower and upper case letters as a parameter and converts alternate character to upper case & lower case, starting from upper case?
File name suggestion: alternateCase.js
Test Data :
console.log(alternateCase(‘samsung’)); // “SaMsUnG”
*/

const alternateCase = (str)=>{
  let strArr = str.split('');
  for(let i=0; i<strArr.length; i++){
    if(i%2)
      strArr[i] = strArr[i].toUpperCase();
    else 
      strArr[i] = strArr[i].toLowerCase();
  }
  return strArr.join('');
}

console.log(alternateCase('samsung'));