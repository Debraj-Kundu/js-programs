/*
Q25. Write a JavaScript function to check whether an object contains given property.
File name suggestion: findProperty.js
Test Data :
console.log(findProperty({
   author: 'Bill Gates',
   title: 'The Road Ahead',
   readingStatus: true
}, 'author')); // true
console.log(findProperty({
   author: 'Bill Gates',
   title: 'The Road Ahead',
   readingStatus: true
}, 'hello')); // false
*/

const findProperty = (book, key)=> book.hasOwnProperty(key);

console.log(findProperty({
  author: 'Bill Gates',
  title: 'The Road Ahead',
  readingStatus: true
}, 'author')); 
console.log(findProperty({
  author: 'Bill Gates',
  title: 'The Road Ahead',
  readingStatus: true
}, 'hello'));