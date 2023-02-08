const addBook = document.querySelector(".adding");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const span = document.querySelector(".close");

btn.addEventListener("click", () => {
    modal.style.display = "block";
})

span.addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "block";
    }
})

addBook.addEventListener("click", () => {
    modal.style.display = "block";
    document.querySelector(".form-title").textContent = "Add Book";
    document.querySelector(".form-add-button").textContent = "Add";
})

const addBookForm = document.querySelector(".add-book");
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    let newBook = {};
    for (let [name, value] of data) {
        if (name === "book-read") {
            newBook["book-read"] = true;
        } else {
            newBook[name] = value || "";
        }
    }
    
    if (!newBook["book-read"]) {
        newBook["book-read"] = false;
    }

    addBookToLibrary(newBook);
    modal.style.display = "none";
})

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
    const bookLocation = document.getElementById("books");
    const div = document.createElement("div");
    div.classList.add("adding");
    div.classList.add("book");
    let counter = 0;
    for (const [key, value] of Object.entries(book)) {
        let outside = `${key}`;
        let inside = `${value}`;
        if (counter === 0) {
            div.innerHTML += inside;
        } else {
            continue;
        }

        counter++;
        // div.innerHTML += `${key}: ${value}\n`;
    }
    
    
    console.log(div);

    
    
    bookLocation.append(div);
}



