/*
Q9. Write a JavaScript program which accept a string as input and reverses it.
File name suggestion: reverse.js
TestData:
console.log(reverse('I love my India')); // ‘India my love I'
console.log(reverse(‘Oh my Oh')); // ‘Oh my Oh'
*/

const reverse = (str)=> {
  const strArr = str.split(' ');
  return strArr.reverse().join(' ');
};

console.log(reverse('I love my India')); 
console.log(reverse('Oh my Oh')); 