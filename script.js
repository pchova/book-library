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

/* addBookToLibrary() function adds a newly created Book object 
** to the myLibrary array */
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

/* addManualCardToPage() function manually adds books to the array 
** and displays them on the page without subitting through the user form */
function displayBooks(library) {
  const container = document.querySelector(".container");

  library.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCardStyle");

    let bookIndex = library.indexOf(book);
    console.log(bookIndex);
    bookCard.dataset.index = bookIndex;
    console.log(bookCard);

    const pTitle = document.createElement("p");
    const pAuthor = document.createElement("p");
    const pPages = document.createElement("p");
    const pRead = document.createElement("p");

    pTitle.textContent = book.title;
    pAuthor.textContent = book.author;
    pPages.textContent = book.numberOfPages += " pages";
    /* Conditional Statement to display whether book has been read or not */
    if(book.read === true) {
      pRead.textContent = "Read";
    } else if (book.read === false) {
      pRead.textContent = "Not Read";
    } else {
      pRead.textContent = "error in code";
    }

    bookCard.appendChild(pTitle);
    bookCard.appendChild(pAuthor);
    bookCard.appendChild(pPages);
    bookCard.appendChild(pRead);
    container.appendChild(bookCard);
  });
}

const manualAddBooks = [
  new Book("The Master and Margarita", "Mikhail Bulgakov", "448", true),
  new Book("Idiot", "Fyodor Dostoyevskiy", "640", false),
  new Book("Anna Karenina", "Lev Tolstoy", "864", false),
  new Book("Dama s Sabachkoi", "Anton Chekhov", "50", true)
];

manualAddBooks.forEach(addBookToLibrary);
displayBooks(myLibrary);

function displayUserBook() {
  let lastItem = myLibrary[myLibrary.length -1];
  const container = document.querySelector(".container");

  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCardStyle");

  let bookIndex = myLibrary.indexOf(lastItem);
  console.log(bookIndex);
  bookCard.dataset.index = bookIndex;
  console.log(bookCard);

  const pTitle = document.createElement("p");
  const pAuthor = document.createElement("p");
  const pPages = document.createElement("p");
  const pRead = document.createElement("p");

  pTitle.textContent = lastItem.title;
  pAuthor.textContent = lastItem.author;
  pPages.textContent = lastItem.numberOfPages += " pages";

  if(lastItem.read === true) {
    pRead.textContent = "Read";
  } else if (lastItem.read === false) {
    pRead.textContent = "Not Read";
  } else {
    pRead.textContent = "error in code";
  }

  bookCard.appendChild(pTitle);
  bookCard.appendChild(pAuthor);
  bookCard.appendChild(pPages);
  bookCard.appendChild(pRead);
  container.appendChild(bookCard);
}

/* The code below deals with the dialog box and form submit, allows user
** to close the modal box witout submitting data and prevents form data
** to submit and instead displays data in the container class after the
** already created Book objects */
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector("#submitBtn");

/* addButton to open the dialog */
addButton.addEventListener("click", () => {
  dialog.showModal();
});

/* closeButton to close the dialog */
closeButton.addEventListener("click", () => {
  dialog.close();
});

/* Event Listener prevents prevents submitting the form and instead
** displays the data on the page */
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const bookTitleSubmit = document.querySelector('#book_title').value;
  const bookAuthorSubmit = document.querySelector('#book_author').value;
  const bookPagesSubmit = document.querySelector('#book_pages').value;
  const bookReadSubmit = document.querySelector('input[name="read_type"]:checked').value === "true";

  const userBook = new Book(
    bookTitleSubmit, 
    bookAuthorSubmit, 
    bookPagesSubmit, 
    bookReadSubmit
  );

  addBookToLibrary(userBook);
  displayUserBook();
  
  dialog.close();
  document.querySelector("form").reset();
});