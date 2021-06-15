/*
Q24. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
File name suggestion: invert.js
Test Data :
console.log(invert([ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }
]));
Output:
[ 
   {
       'Bill Gates': 'author',
       'The Road Ahead': 'title',
       true: 'readingStatus'
   },
   {
       'Steve Jobs': 'author',
       'Walter Isaacson': 'title',
       true: 'readingStatus
   },
   {
       'Suzanne Collins': 'author',
       'Mockingjay: The Final Book of The Hunger Games': 'title',
       false: 'readingStatus
   }
]
*/


const invert = (books)=>{
  let res = {};
  books.forEach(book => {
    for(let key in book){
      res[book[key]] = key;
    }
  });
  return res;
}

console.log(invert([ 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
  },
  {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
  },
  {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
  }
]));