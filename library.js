const myLibrary = [];

function Book(title,author,pages){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(bookTitle,bookAuthor ,totalPages) {
    const newBook = new Book(bookTitle,bookAuthor,totalPages);
    myLibrary.push(newBook)
   
}
addBookToLibrary("science","tonoy",888);
addBookToLibrary("commerce","tonni",200);
addBookToLibrary("math","safwan",500)
console.log(myLibrary);



