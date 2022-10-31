let myLibrary = [];

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
