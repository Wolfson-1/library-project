/* query selectors */
const libraryContainer = document.querySelector('.libraryContainer')


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
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

//take inputs from user & create new book object





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
