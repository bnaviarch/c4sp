console.log('this works.')

const GOOGLE_BOOKS_URL =
  "https://www.googleapis.com/books/v1/volumes?q=isbn:0679775439";

const container = document.querySelector('.container')

function getBooks(){

  fetch(GOOGLE_BOOKS_URL)
    .then(response => response.json())
    .then(data => {
      renderBook(data);

/*
      let items = data.items
      for( item in items ){
        console.log(items[item])
        console.log(items[item]['volumeInfo'])
        console.log(items[item]['volumeInfo']['title'])

*/

  });
}

function renderBook(item){

  let bookItem = book.items;

  for ( idx in bookItem ){
    console.log(bookItem[idx]['volumeInfo']['title'])
  }
}

getBooks()
