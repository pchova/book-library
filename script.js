/* CONSTANTS */
const myLibrary = [];

/* Book class sets parameters for a book title, author
** number of pages, and boolean read */
class Book {
  constructor(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
  }
}

/* Book Prototype function that toggle's a book's read status */
Book.prototype.toggleRead = function() {
  if (this.read === true) {
    this.read = false;
  } else {
    this.read = true;
  }
  return;
}

/* addBookToLibrary() function adds a newly created Book object 
** to the myLibrary array */
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

/* renderLibrary() function clears the DOM and displays book objects
** after any change to the array */
function renderLibrary() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  myLibrary.forEach((book, index) => createBookCard(book, index));
}

/* deleteBook() function deletes a bookCard that a user added to the page */
function deleteBook(bookCard) {
  let bookIndex = parseInt(bookCard.getAttribute("data-index"));
  myLibrary.splice(bookIndex, 1);
  renderLibrary();
}

/* createBookCard() function creates a book container for each
** book object to display in the DOM */
function createBookCard(book, index) {
  const container = document.querySelector(".container");
  
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCardStyle");
  bookCard.setAttribute("data-index", index);

  const pTitle = document.createElement("p");
  pTitle.textContent = `Title: ${book.title}`;

  const pAuthor = document.createElement("p");
  pAuthor.textContent = `Author: ${book.author}`;

  const pPages = document.createElement("p");
  pPages.textContent = `Number of pages: ${book.numberOfPages}`;

  const pRead = document.createElement("button");
  pRead.classList.add("readButton");
  pRead.textContent = book.read ? "Read" : "Not Read";
  pRead.addEventListener("click", () => {
    book.toggleRead();
    renderLibrary();
  });

  const pDelete = document.createElement("button");
  pDelete.classList.add("deleteButton");
  pDelete.innerHTML = '<img src="icons/delete.svg" alt="trash icon"/>';
  pDelete.addEventListener("click", () => {
    deleteBook(bookCard);
  });
  
  bookCard.append(pTitle, pAuthor, pPages, pRead, pDelete);
  container.appendChild(bookCard);
}

/*Initialize array with books */
const manualAddBooks = [
  new Book("The Master and Margarita", "Mikhail Bulgakov", "448", true),
  new Book("Idiot", "Fyodor Dostoyevskiy", "640", false),
  new Book("Anna Karenina", "Lev Tolstoy", "864", false),
  new Book("Dama s Sabachkoi", "Anton Chekhov", "50", true),
  new Book("The One Straw Revolution", "Masanobu Fukuoka", '200', true),
  new Book("Ulysseus", "James Joyce", "732", false)
];
manualAddBooks.forEach(addBookToLibrary);
renderLibrary();

/* Dialog and Form Selectors */
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector("#submitBtn");

/* Event Listener addButton to open/close the dialog */
addButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

/* Event Listener prevents prevents submitting the form
** and adds user data to array*/
submitButton.addEventListener("click", (event) => {
  event.preventDefault(); 

  const form = document.querySelector("form");
  if(!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const userBook = getFormData();
  addBookToLibrary(userBook);
  renderLibrary();

  dialog.close();
  form.reset();
});

/* Creates book object with from data */
function getFormData() {
  return new Book(
    document.querySelector('#book_title').value,
    document.querySelector('#book_author').value,
    document.querySelector('#book_pages').value,
    document.querySelector('input[name="read_type"]:checked').value === "true"
  );   
}