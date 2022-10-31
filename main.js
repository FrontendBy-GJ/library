function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// display / bring up form
const newBookBtn = document.querySelector('#newBook');
newBookBtn.addEventListener('click', () => {
  document.querySelector('.form').style.display = 'block';
});

function newBook() {
  let myLibrary = [
    {
      title: 'The Hobbit',
      author: 'J.R.R Tolkien',
      pages: 395,
    },
  ];

  let books = myLibrary;

  books.forEach((book) => addBookToCard(book));
}

// add book's info (title,author,pages) to card
function addBookToCard(book) {
  const container = document.querySelector('.container');
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
  <div class='card-book-title'>${book.title}</div>
  <div class='card-book-author'>Author: ${book.author}</div>
  <div class='card-book-pages'>Pages: ${book.pages}</div>
  `;

  container.appendChild(card);
}

newBook();
