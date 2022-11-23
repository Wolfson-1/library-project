/* query selectors */
const libraryContainer = document.querySelector('.libraryContainer')


//------------------------------------------

/*Take inputs from user*/

//define library & function for object constructor
let myLibrary = [
    
     {
        Title: 'Harry Potter & the Wizard of OZ!',
        author: 'Me!',
        pages: 2,
        read: true,
    }, 

    'hello','gooodbye','my name is harry']

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
    //libraryBook.innerHTML = myLibrary[i];
    libraryContainer.appendChild(libraryBook);

    let bookTitle = document.createElement('div');
    bookTitle.classList.add('title');
    libraryBook.appendChild(bookTitle);

    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('author');
    libraryBook.appendChild(bookAuthor);

    let bookPages = document.createElement('div');
    bookPages.classList.add('pages');
    libraryBook.appendChild(bookPages);

    let bookRead = document.createElement('div');
    bookRead.classList.add('read');
    libraryBook.appendChild(bookRead);
    
};
