const addbtn = document.querySelector("button");
const overlay = document.getElementById("overlay");
const popUp = document.getElementById("modal");
const form = document.getElementById("myForm");
const grid = document.getElementById("gridContainer");

addbtn.addEventListener('click', (e) => {
    popUp.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', (e) => {
    overlay.classList.remove('active');
    popUp.classList.remove('active');
});

let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = document.querySelector('#name').value;
    this.author = document.querySelector('#author').value;
    this.pages = document.querySelector('#pages').value;
    this.read = document.querySelector('#completed').value;
    this.info = function() {

        return ("Title: " + this.name + "<br>" + "Author: " + this.author + "<br>" + 'Pages: ' + this.pages + "<br>" + 'Completed: ' + this.read) + "<br>" + "<br>";
    }
}

const newBook = new Book('Cant Hurt Me', 'David Goggins', '200', 'completed');

function addBookToLibrary() {
    myLibrary.push(newBook);
    console.log(myLibrary);
}

// make a css grid (container) in css then make the cards size/shape in javascript go into that grid container

form.addEventListener('submit', (e) => {
    e.preventDefault();
    Book();
    addBookToLibrary();
    overlay.classList.remove('active');
    popUp.classList.remove('active');
    form.reset();
    cardPopup();
});



function cardPopup() {
    const card = document.createElement('div');
    card.style.width = "270px";
    card.style.height = "300px";
    card.style.background = "#bde0fe";
    card.style.borderStyle = "solid";
    card.style.borderColor = "white";
    card.style.borderRadius = "0.18em";
    card.style.fontFamily = "'Roboto',sans-serif"
    card.style.color = "white";
    card.style.fontSize = "25px";
    card.style.padding = "10px";
    card.innerHTML = this.info();
    card.style.lineHeight = "2";
    card.style.textShadow = "1px .5px 0 #cdb4db";
    
    const change = document.createElement('button');
    card.appendChild(change);
    grid.appendChild(card);
    change.style.height = "40px";
    change.style.width = "100px";
    change.style.background = "#cdb4db";
    change.innerHTML = "Completed";

    const deletion = document.createElement('button');
    card.appendChild(deletion);
    deletion.style.height = "40px";
    deletion.style.width = "100px";
    deletion.style.background = "#cdb4db";
    deletion.innerHTML = "Delete";
    deletion.style.marginLeft = "62px";

    change.addEventListener('click', (e) => {
        if (this.read == 'Yes') {
            this.read = 'No'
            card.innerHTML = this.info();
        }
    });

    deletion.addEventListener('click', (e) => {
        card.remove();
    });

}