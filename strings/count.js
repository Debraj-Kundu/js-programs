/*
Q12. Write a JavaScript function to count the occurrence of a substring in a string?
File name suggestion: count.js
Test Data :
console.log(count('The quick brown fox jumps over the lazy dog', 'the')); // 2
*/


const count = (str, substr)=>{
  str = str.toUpperCase();
  substr = substr.toUpperCase();
  let strArr = str.split(' ');
  let res=0;
  for(let i=0; i<str.length; i++){
    if(strArr[i] === substr)
      res++;
  }
  return res;
}

console.log(count('The quick brown fox jumps over the lazy dog', 'the'));