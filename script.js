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

let b1 = new Book("The Master and Margarita", "Mikhail Bulgakov", "448", "True");
addBookToLibrary(b1);
let b2 = new Book("Idiot", "Fyodor Dostoyevskiy", "1000", "False");
addBookToLibrary(b2);
let b3 = new Book("Anna Karenina", "Lev Tolstoy", "2540", "False");
addBookToLibrary(b3);
let b4 = new Book("Dama s Sabachkoi", "Anton Chekhov", "50", "True");
addBookToLibrary(b4);

const container = document.querySelector(".container");
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

