const myLibrary = [];

function Book(title,author,pages){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(bookTitle,bookAuthor ,totalPages) {
    const newBook = new Book(bookTitle,bookAuthor,totalPages);
    myLibrary.push(newBook);
    displayBooks();
   
}
addBookToLibrary("science","tonoy",800);
addBookToLibrary("math","tonni",800);
addBookToLibrary("science","rafsan",800);

function displayBooks(){
    const container = document.querySelector(".container");
    container.innerHTML = '';
    myLibrary.forEach((book,index)=>{
        const card = document.createElement("div");
        card.classList.add("div-item");
        card.innerHTML = `
        <h3>Title : ${book.title}</h3>
        <p>Author : ${book.author}</p>
        <p>Page: ${book.pages}</p>`;
        container.appendChild(card);
    
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "remove";
        card.appendChild(removeBtn);
        removeBtn.addEventListener("click",()=>{
        myLibrary.splice(index, 1);
        displayBooks();
})

    });
}




// == show form ==
const newBookFormContainer = document.querySelector(".newBookFormContainer");
const addNewBookBtn = document.querySelector(".btn1");
const cancelBtn = document.querySelector(".cancel-btn");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageInput = document.querySelector("#pages");

addNewBookBtn.addEventListener("click", ()=>{ 
    newBookFormContainer.style.display =  "block";
    console.log("clicked");
    
});

cancelBtn.addEventListener("click", () =>{
    newBookFormContainer.style.display = "none";
    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
})


const newBookForm = document.querySelector(".newBookForm")
newBookForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const title = newBookForm.title.value;
    const author = newBookForm.author.value;
    const pages = newBookForm.pages.value;
    
    addBookToLibrary(title,author,pages);
    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    newBookFormContainer.style.display = "none";
})

