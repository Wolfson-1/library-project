/* query selectors */
const libraryContainer = document.querySelector('.libraryContainer');
const submitButton = document.querySelector('.submitButton');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

/* variables */
let newTitle = '';
let newAuthor = '';
let newPages = '';
let newRead = '';
let newBook = '';

//------------------------------------------

/*Take inputs from user*/

//define library & function for object constructor
let myLibrary = [
    
     {
        title: 'Harry Potter & the Wizard of OZ!',
        author: 'Me!',
        pages: 2,
        read: true,
    },

    {
        title: 'James & The Giant Peach',
        author: 'JK Rowling',
        pages: 5356,
        read: false,
    }, 

    {
        title: 'Vikings',
        author: 'Colin Firth',
        pages: 45,
        read: true,
    }, 
]

function bookConstructor(title,author,pages,read) {
    this.read = read
    this.pages = pages
    this.author = author
    this.title = title
};

//take inputs from user & create new book object

function libraryDivUpdate() { {

        let libraryBook = document.createElement('div');
        libraryBook.classList.add(`libraryBook${myLibrary.length - 1}`);
        libraryContainer.appendChild(libraryBook);

        let bookTitle = document.createElement('div');
        bookTitle.classList.add('title');
        libraryBook.appendChild(bookTitle);
        bookTitle.innerHTML = `Title: ${myLibrary[myLibrary.length - 1].title}`

        let bookAuthor = document.createElement('div');
        bookAuthor.classList.add('author');
        libraryBook.appendChild(bookAuthor);
        bookAuthor.innerHTML = `Author: ${myLibrary[myLibrary.length - 1].author}`

        let bookPages = document.createElement('div');
        bookPages.classList.add('pages');
        libraryBook.appendChild(bookPages);
        bookPages.innerHTML = `No. of Pages: ${myLibrary[myLibrary.length - 1].pages}`

        let bookRead = document.createElement('div');
        bookRead.classList.add('read');
        libraryBook.appendChild(bookRead);
        bookRead.innerHTML = `Read?: ${myLibrary[myLibrary.length - 1].read}`
}};


submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    //assigns form value to temporary variables
    newTitle = titleInput.value;
    newAuthor = authorInput.value;
    newPages = pagesInput.value;
    newRead = readInput.value;

    //adds temporary variables to newBook & pushes to myLibrary array
    newBook = new bookConstructor(newTitle,newAuthor,newPages,newRead);
    addToLibrary(newBook);

    //Clears all temporary variables & form inputs
    newTitle = '';
    newAuthor = '';
    newPages = '';
    newRead = '';
    newBook = '';

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = '';

    libraryDivUpdate();
})



//------------------------------------------

/*
add object to 'library' array
*/


// basic function to add book to library array
function addToLibrary(newBook) {
    myLibrary.push(newBook);
};


//------------------------------------------
/*
display in library
*/

//creates divs for each book & adds library array info
for (i=0; i < myLibrary.length; i++) {
    let libraryBook = document.createElement('div');
    libraryBook.classList.add(`libraryBook${i}`);
    libraryContainer.appendChild(libraryBook);

    let bookTitle = document.createElement('div');
    bookTitle.classList.add('title');
    libraryBook.appendChild(bookTitle);
    bookTitle.innerHTML = `Title: ${myLibrary[i].title}`

    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    libraryBook.appendChild(bookAuthor);
    bookAuthor.innerHTML = `Author: ${myLibrary[i].author}`

    let bookPages = document.createElement('div');
    bookPages.classList.add('pages');
    libraryBook.appendChild(bookPages);
    bookPages.innerHTML = `No. of Pages: ${myLibrary[i].pages}`

    let bookRead = document.createElement('div');
    bookRead.classList.add('read');
    libraryBook.appendChild(bookRead);
    bookRead.innerHTML = `Read?: ${myLibrary[i].read}`
    
};

