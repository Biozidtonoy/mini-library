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
addBookToLibrary("math","safwan",500);
console.log(myLibrary);


function displayBooks(){
    const container = document.querySelector(".container");

    for(let i=0; i < myLibrary.length; i++){
        const book = myLibrary[i];

        const card = document.createElement("div");
        card.classList.add("div-item");
        container.appendChild(card);

        card.innerHTML = `<h3>Title : ${book.title}</h3>
        <p>Author : ${book.author}</p>
        <p>Page: ${book.pages}</p>`
    }
}
displayBooks();

const btn1= document.querySelector(".btn1");
btn1.addEventListener("click", ()=>{
    
    
});