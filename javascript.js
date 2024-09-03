const myLibrary = [];

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function()
{
    console.log(this.title, this.author, this.pages, this.read)
}

function addBookToLibrary()
{
    let book = new Book(title.value, author.value, pages.value, read.value);
    book.info();
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const button = document.querySelector(".submit");


button.addEventListener("click", () =>
{
    addBookToLibrary();
    
})

