/*
Q6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
File name suggestion: insert.js
TestData:
console.log(insert(025468)); // “0-254-6-8.”
console.log(insert(357)); // 357
console.log(insert(12345)); // 12345
*/

const insert = (num)=>{
  //const numString = num.toString();
  const numArr = num.split('');
  for(let i=1; i<numArr.length; i++){
    if((numArr[i-1]%2 === 0) && (numArr[i]%2 === 0)){
      numArr.splice(i, 0, '-');
    }
  }
  
  return numArr.join('');
}

console.log(insert('025468')); 
console.log(insert('357')); 
console.log(insert('12345')); 