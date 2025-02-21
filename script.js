const myLibrary = [];
let newBook;

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

let b1 = new Book("The Master and Margarita", "Mikhail Bulgakov", "448", "true");
addBookToLibrary(b1);
let b2 = new Book("Idiot", "Fyodor Dostoyevskiy", "640", "false");
addBookToLibrary(b2);
let b3 = new Book("Anna Karenina", "Lev Tolstoy", "864", "false");
addBookToLibrary(b3);
let b4 = new Book("Dama s Sabachkoi", "Anton Chekhov", "50", "true");
addBookToLibrary(b4);

function addCardToPage() {
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
    pPages.textContent = book.numberOfPages += " pgs";
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
addCardToPage();



function addBookToPage() {
  const container = document.querySelector(".container2");
  const bookTable = document.createElement("table");
  const tableBody = document.createElement("tbody");

  bookTable.innerHTML = 
    `<thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Read</th>
          </tr>
      </thead>`;

  for(let book of myLibrary) {
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdRead = document.createElement("td"); 

    tdTitle.textContent = book.title;
    tdAuthor.textContent = book.author;
    tdPages.textContent = book.numberOfPages;
    tdRead.textContent = book.read;

    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    newRow.appendChild(tdPages);
    newRow.appendChild(tdRead);

    tableBody.appendChild(newRow);
  }

  bookTable.appendChild(tableBody);
  container.appendChild(bookTable);
};
addBookToPage(); 

