const getTheTitles = function(books) {
    let returnArray = []
    books.forEach(book => {
        returnArray.push(book.title)
    });
    return returnArray
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
