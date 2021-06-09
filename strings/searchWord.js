/*
Q13. Write a JavaScript function to find a word within a string?
File name suggestion: searchWord.js
Test Data :
console.log(searchWord(‘The quick brown fox’, ‘fox’)); // “‘fox’ was found 1 times.”
console.log(searchWord(‘aa, bb, cc, dd, aa’, ‘aa’)); // “‘aa’ was found 2 times.”
*/

const searchWord = (str, substr)=>{
  let strArr = str.split(' ');
  let res = 0;
  for(let i=0; i<strArr.length; i++){
    if(strArr[i].search(substr) !== -1)
      res++;
  }
  return `'${substr}' was found ${res} times.`;
}


console.log(searchWord('The quick brown fox', 'fox')); 
console.log(searchWord('aa, bb, cc, dd, aa','aa')); 