console.log('this works.')

const GOOGLE_BOOKS_URL =
  "https://www.googleapis.com/books/v1/volumes?q=isbn:0679775439";

  fetch(GOOGLE_BOOKS_URL)
    .then(response => response.json())
    .then(data => console.log(data));
