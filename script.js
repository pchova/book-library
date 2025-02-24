const myLibrary = [];
let newBook;

/* Book class sets parameters for a book title, author, 
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
function addManualCardToPage() {
  let b1 = new Book("The Master and Margarita", "Mikhail Bulgakov", "448", "true");
  let b2 = new Book("Idiot", "Fyodor Dostoyevskiy", "640", "false");
  let b3 = new Book("Anna Karenina", "Lev Tolstoy", "864", "false");
  let b4 = new Book("Dama s Sabachkoi", "Anton Chekhov", "50", "true");

  addBookToLibrary(b1);
  addBookToLibrary(b2);
  addBookToLibrary(b3);
  addBookToLibrary(b4);

  const container = document.querySelector(".container");

  for(let book of myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCardStyle");

    const pTitle = document.createElement("p");
    const pAuthor = document.createElement("p");
    const pPages = document.createElement("p");
    const pRead = document.createElement("p");

    pTitle.textContent = book.title;
    pAuthor.textContent = book.author;
    pPages.textContent = book.numberOfPages += " pages";
    /* Conditional Statement to display whether book has been read or not */
    if(book.read === "true") {
      pRead.textContent = "Read";
    } else if (book.read === "false") {
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
}
addManualCardToPage();

/* The code below deals with the dialog box and form submit, allows user
** to close the modal box witout submitting data and prevents form data
** to submit and instead displays data in the container class after the
** already created Book objects */
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector("#submitBtn");

/* Allows addButton to open the dialog */
addButton.addEventListener("click", () => {
  dialog.showModal();
});

/* Allows closeButton to close the dialog */
closeButton.addEventListener("click", () => {
  dialog.close();
});

/* Event Listener prevents prevents submitting the form and instead
** displays the data on the page */
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const bookTitleSubmit = document.querySelector('#book_title');
  const bookAuthorSubmit = document.querySelector('#book_author');
  const bookPagesSubmit = document.querySelector('#book_pages');
  const bookReadSubmit = document.querySelector('input[name="read_type"]:checked');

  let userBook = new Book(bookTitleSubmit.value, bookAuthorSubmit.value, bookPagesSubmit.value, bookReadSubmit.value);
  addBookToLibrary(userBook);
  console.log(userBook);

  /* addCardToPage() function is similar to addManualCardToPage but only displays 
  ** the last item in myLibrary array */
  function addCardToPage() {
    let lastItem = myLibrary[myLibrary.length -1];
    const container = document.querySelector(".container");

    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCardStyle");

    const pTitle = document.createElement("p");
    const pAuthor = document.createElement("p");
    const pPages = document.createElement("p");
    const pRead = document.createElement("p");

    pTitle.textContent = lastItem.title;
    pAuthor.textContent = lastItem.author;
    pPages.textContent = lastItem.numberOfPages += " pages";
    /* Conditional Statement to display whether book has been read or not */
    if(lastItem.read === "true") {
      pRead.textContent = "Read";
    } else if (lastItem.read === "false") {
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
  
  dialog.close(addCardToPage());

  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => input.value = '');
});