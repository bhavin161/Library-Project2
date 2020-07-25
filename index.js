console.log('welcome to library');

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {


}

// add method to display prototype
Display.prototype.add = function (book) {
    console.log('adding');
    tablebody = document.getElementById('tablebody');
    let uistring = `
                        <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

    tablebody.innerHTML += uistring;
}


//  clear method
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}
// validate
Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.name.author < 3) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type,displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message: ${displaymessage}</strong> You should check in on some of those fields below.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  
  setTimeout(function() {
      message.innerHTML='';
  },5000);

}

// add submit event listner

let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);


function libraryformsubmit(e) {

    console.log('you have submited;');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('Author').value;

    let Fiction = document.getElementById('Fiction');
    let Programming = document.getElementById('Programming');
    let Coocking = document.getElementById('Coocking');
    let type;

    if (Fiction.checked) {
        type = Fiction.value;
    }

    else if (Programming.checked) {
        type = Programming.value;
    }

    else if (Coocking.checked) {
        type = Coocking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);


    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'your book is enterd.');
    }
    else {
        display.show('danger', 'sorry you cant enter your book.');
    }

    e.preventDefault();

}
