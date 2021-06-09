/*
Q7. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case?
File name suggestion: swapCase.js
Test Data :
console.log(swapCase(‘AaBbc’)); // “aAbBC”
*/


const swapCase = (str)=>{
  let strArr = str.split('');
  for(let i=0; i<strArr.length; i++){
    if(strArr[i] === strArr[i].toUpperCase())
      strArr[i] = strArr[i].toLowerCase();
    else 
      strArr[i] = strArr[i].toUpperCase();
  }
  return strArr.join('');
}

console.log(swapCase('AaBbc'));