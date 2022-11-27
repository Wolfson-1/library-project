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

//for remove from Array
let thisButton = '';
let thisTitle = '';
let selector = '';
let toBeDeleted = '';
let endNo = '';
let endNoDoubleDig = '';
let thisTitle2 = '';
let toDelete = '';

//for read button
let readSelector = '';
let thisRead = '';

//------------------------------------------

/*Take inputs from user*/

//define library & function for object constructor
let myLibrary = [
    
     {
        title: 'Harry Potter & the Wizard of OZ!',
        author: 'Me!',
        pages: 2,
        read: 'Read',
    },

    {
        title: 'James & The Giant Peach',
        author: 'JK Rowling',
        pages: 5356,
        read: 'Unread',
    }, 

    {
        title: 'Vikings',
        author: 'Colin Firth',
        pages: 45,
        read: 'Read',
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
        libraryBook.classList.add(`libraryBook${myLibrary.length}`);
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

        let buttons = document.createElement('div');
        buttons.classList.add('buttonDiv');
        libraryBook.appendChild(buttons);
        
        let readButton = document.createElement('button');
        readButton.classList.add(`readButton${myLibrary.length}`)
        buttons.appendChild(readButton);
        readButton.innerHTML = `Read?`

    
        let deleteButton = document.createElement('button');
        deleteButton.classList.add(`deleteButton${myLibrary.length}`);
        buttons.appendChild(deleteButton);
        deleteButton.innerHTML = `Delete`

        readButton.addEventListener('click', e => {
        
            readSelector = e.target.classList.value;
    
            //pulls value from current selected div for "Read?"
            thisButton = document.querySelector(`.${readSelector}`)
            thisDiv = thisButton.parentElement
            thisOuterDiv = thisDiv.parentElement
            thisRead = thisOuterDiv.querySelector('.read');
            thisReadContent = thisOuterDiv.querySelector('.read').textContent.slice(7,);
    
            console.log(readSelector)
    
            //If statement to change read value
            if (thisReadContent === 'Read') {
    
                thisRead.innerHTML = 'Read?: Unread';
                console.log(thisRead);
    
            } if (thisReadContent === 'Unread') {
    
                thisRead.innerHTML = 'Read?: Read';
                console.log(thisRead); 
            }
     
         }); 

        deleteButton.addEventListener('click', e => {
        
            selector = e.target.classList.value;
            thisButton = document.querySelector(`.${selector}`)
            thisTitle = thisButton.parentElement
            thisTitle2 = thisTitle.parentElement
            toDelete = thisTitle2.firstChild.innerHTML.slice(7);
    
            endNo = selector.slice(selector.length-1);
            endNoDoubleDig = selector.slice(selector.length-2, selector.length);
            
            if (isNaN(selector.slice(length-2,selector.length))) {
                toRemove = libraryContainer.querySelector(`.libraryBook${endNo}`)
                toRemove.remove();
            } else {
                toRemove = libraryContainer.querySelector(`.libraryBook${endNoDoubleDig}`)
                toRemove.remove();
            }

            for (let i = 0; i <= myLibrary.length; i++) {

                if (myLibrary[i].title == toDelete) {
                    myLibrary.splice(i,1);
                    console.log(myLibrary[i].title)
                    
                }; 
                };
           
         });
}};



submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    //assigns form value to temporary variables
    newTitle = titleInput.value;
    newAuthor = authorInput.value;
    newPages = pagesInput.value;
    if (readInput.value == 'true') {
            newRead = 'Unread';
    } else {
        newRead= 'Read';
    };

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
    let libraryBook= document.createElement('div');
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
    
    let buttons = document.createElement('div');
    buttons.classList.add('buttonDiv');
    libraryBook.appendChild(buttons);
    
    let readButton = document.createElement('button');
    readButton.classList.add(`readButton${i}`);
    readButton.innerHTML = `Read?`
    buttons.appendChild(readButton);

    let deleteButton = document.createElement('button');
    deleteButton.classList.add(`deleteButton${i}`);
    buttons.appendChild(deleteButton);
    deleteButton.innerHTML = `Delete`

    //read button event listener
    readButton.addEventListener('click', e => {
        
        readSelector = e.target.classList.value;

        //pulls value from current selected div for "Read?"
        thisButton = document.querySelector(`.${readSelector}`)
        thisDiv = thisButton.parentElement
        thisOuterDiv = thisDiv.parentElement
        thisRead = thisOuterDiv.querySelector('.read');
        thisReadContent = thisOuterDiv.querySelector('.read').textContent.slice(7,);

        console.log(readSelector)

        //If statement to change read value
        if (thisReadContent === 'Read') {

            thisRead.innerHTML = 'Read?: Unread';
            console.log(thisRead);


        } if (thisReadContent === 'Unread') {

            thisRead.innerHTML = 'Read?: Read';
            console.log(thisRead);
        }
 
     });

     // Event listener for delete button to effectivly remove selected div & array object.
    deleteButton.addEventListener('click', e => {

        selector = e.target.classList.value;
        thisButton = document.querySelector(`.${selector}`)
        thisTitle = thisButton.parentElement
        thisTitle2 = thisTitle.parentElement
        toDelete = thisTitle2.firstChild.textContent.slice(7);

        endNo = selector.slice(selector.length-1);
        endNoDoubleDig = selector.slice(selector.length-2, selector.length);



        if (isNaN(selector.slice(length-2,selector.length))) {
            
            toRemove = libraryContainer.querySelector(`.libraryBook${endNo}`)
            toRemove.remove();

        } else {

            toRemove = libraryContainer.querySelector(`.libraryBook${endNoDoubleDig}`)
            toRemove.remove();

            }

            for (let i = 0; i < myLibrary.length; i++) {

                if (myLibrary[i].title == toDelete) {
                    myLibrary.splice(i,1);
                }; 
                };
     });


};