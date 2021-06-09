/*
Q6. Write a JavaScript function to capitalize the first letter of each word in a string?
File name suggestion: capitalizeWords.js
Test Data :
console.log(capitalizeWords(‘js string exercises’)); // “Js String Exercises”
*/

const capitalizeWords = (str)=> {
  let strArr = str.split(' ');
  for(let i=0; i<strArr.length; i++){
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(' ');
}

console.log(capitalizeWords('js string exercises'));