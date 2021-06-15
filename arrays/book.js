/*
Q23. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
File name suggestion: book.js
Test Data :
console.log(book([ 
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
Already read 'Bill Gates' by The Road Ahead.
Already read 'Steve Jobs' by Walter Isaacson.
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
*/


const book = (books)=>{
  let res = '';
  books.forEach((book)=>{
    if(book.readingStatus)
      res += `Already read '${book.title}' by ${book.author}.\n`;
    else 
    res += `You still need to read '${book.title}' by ${book.author}.\n`;
  })
  return res;
}

console.log(book([ 
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