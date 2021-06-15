/*
Q13. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
File name suggestion: removeDuplicates.js
TestData:
console.log(removeDuplicates([1, 2, 3, 4, 6, 1, 3])); // [1, 2, 3, 4, 6]
console.log(removeDuplicates([1, 4, 7, 0])); // [1, 4, 7, 0]
*/



const removeDuplicates = (arr)=>{
  const freq = {}, res = [];
  arr.forEach(e=>{
    freq[e] = false;
  })
  for(let key in freq)
    res.push(key);
  return res;
}

console.log(removeDuplicates([1, 2, 3, 4, 6, 1, 3])); 
console.log(removeDuplicates([1, 4, 7, 0])); 