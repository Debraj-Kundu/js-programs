/*
File name suggestion: frequent.js
TestData:
console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); // a ( 5 times )
console.log(frequent([1, 2, 3, 4, 5])); // 1 ( 1 time )
console.log(frequent([5, 2, 3, 1, 2, 4, 1])); // 2 ( 2 times )
*/

const frequent = (arr)=>{
  let freq = {};
  let maxFreq = -1, res;
  arr.forEach(e => {
    freq[e] = freq[e] ? ++freq[e]:1;
    if(freq[e] > maxFreq){
      maxFreq = freq[e];
      res = e;
    }
  })

  return `${res} (${maxFreq} times)`;
}

console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); 
console.log(frequent([1, 2, 3, 4, 5])); 
console.log(frequent([5, 2, 3, 1, 2, 4, 1])); 