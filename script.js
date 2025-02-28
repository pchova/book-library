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

/* addManualCardToPage() function creates a book container for each
** book object in the array and displays them in the DOM */
function displayBooks(library) {
  const container = document.querySelector(".container");

  library.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCardStyle");
    bookCard.setAttribute("data-index", `${index}`);

    const pTitle = document.createElement("p");
    const pAuthor = document.createElement("p");
    const pPages = document.createElement("p");
    const pRead = document.createElement("p");
    const pButton = document.createElement("button");
    pButton.classList.add("deleteButton");

    pTitle.textContent = book.title;
    pAuthor.textContent = book.author;
    pPages.textContent = book.numberOfPages + " pages";
    pButton.textContent = "delete";

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
    bookCard.appendChild(pButton);
    container.appendChild(bookCard);

    /* Event listener deletes a bookCard from DOM and myLibrary */
    pButton.addEventListener("click", () => {
      deleteBook(bookCard);
    });
  });
}

/* renderLibrary() function clears the DOM and displays book objects
** after any change to the array */
function renderLibrary() {
  const container = document.querySelector(".container");
  container.replaceChildren();
  displayBooks(myLibrary);
}

const manualAddBooks = [
  new Book("The Master and Margarita", "Mikhail Bulgakov", "448", true),
  new Book("Idiot", "Fyodor Dostoyevskiy", "640", false),
  new Book("Anna Karenina", "Lev Tolstoy", "864", false),
  new Book("Dama s Sabachkoi", "Anton Chekhov", "50", true)
];
manualAddBooks.forEach(addBookToLibrary);
displayBooks(myLibrary);

/* deleteBook() function deletes a bookCard that a user added to the page */
function deleteBook(bookCard) {
  let bookIndex = bookCard.getAttribute("data-index");
  myLibrary.splice(bookIndex, 1);

  bookCard.remove();
  renderLibrary();
}

/* The dialog box and form submit */
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector("#submitBtn");

/* Event Listener addButton to open the dialog */
addButton.addEventListener("click", () => {
  dialog.showModal();
});

/* Event Listener closeButton to close the dialog */
closeButton.addEventListener("click", () => {
  dialog.close();
});

/* Event Listener prevents prevents submitting the form and
** displays book objects on the page */
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
  renderLibrary();
  
  dialog.close();
  document.querySelector("form").reset();
});