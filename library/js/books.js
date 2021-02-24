let container = document.querySelector(".container-fluid");

//  Book addition
let addBookBtn = document.getElementById("add_new_book");
let addBookBtn_link = document.getElementById("add_book_link");
let books = localStorage.getItem("items") ? JSON.parse(localStorage.getItem('items')) : [];
let table = document.getElementById("books_table");
let noBookTitle = document.getElementById("no-book");


if (books.length > 0) {
    for (let i = 0; i < books.length; i++) {
        table.children[1].insertAdjacentHTML("beforeend", `<tr>
        <th scope="row">${i+1}</th>
        <td>${books[i].title}</td>
        <td>${books[i].author}</td>
        <td>${books[i].amount}</td>
        <td>
            <button class="__edit_btn"><i class="bi bi-pencil-fill"></i></button>
        </td>
      </tr>`)
    }
}

function addBook() {

    if (books.length === 0) {
        for (let i = 0; i < books.length; i++) {
            table.children[1].insertAdjacentHTML("beforeend", `<tr>
            <th scope="row">${i+1}</th>
            <td>${books[i].title}</td>
            <td>${books[i].author}</td>
            <td>${books[i].amount}</td>
            <td>
                <button class="__edit_btn"><i class="bi bi-pencil-fill"></i></button>
            </td>
          </tr>`);

        }

    } else {
        for (let i = books.length - 1; i < books.length; i++) {
            table.children[1].insertAdjacentHTML("beforeend", `<tr>
            <th scope="row">${i+1}</th>
            <td>${books[i].title}</td>
            <td>${books[i].author}</td>
            <td>${books[i].amount}</td>
            <td>
                <button class="__edit_btn"><i class="bi bi-pencil-fill"></i></button>
            </td>
          </tr>`);

        }
    }
    location.reload();
}



addBookBtn.onclick = function () {
    container.insertAdjacentHTML("afterend", `
    <div class="__books_modal">
    <div class="__overlay">
        <div class="__modal">
            <button class="__modal_close">
                <i class="bi bi-x"></i>
            </button>
            <div class="__edit_from">
                <span class="modal_title">Add book:</span>
                <div class="title">
                    <label for="title">Title:</label>
                    <input type="text" id="title">
                </div>
                <div class="author">
                    <label for="author">Author:</label>
                    <input type="text" id="author">
                </div>
                <div class="amount">
                    <label for="amount">Amount:</label>
                    <input type="number" id="amount">
                </div>
                <div class="save_btn">
                    <button class="btn btn-outline-dark" id="book_save">Save</button>
                </div>
            </div>
        </div>
    </div>
</div>`);
    let book_title = document.getElementById("title");
    let author_title = document.getElementById("author");
    let amount = document.getElementById("amount");
    let book_save = document.getElementById("book_save");
    let closeModal = document.querySelector(".__modal_close");

    closeModal.onclick = function () {
        document.querySelector(".__books_modal").remove();
    };

    book_save.onclick = function () {


        if (book_title.value.length === 0) {
            alert("Title must not be empty");
        } else if (author_title.value.length === 0) {
            alert("Author name must not be empty");
        } else if (amount.value.length === 0) {
            alert("Amount must not be empty");
        } else {
            let title_check = book_title.value.match(/[a-z]/igm);
            let author_check = author_title.value.match(/[A-Za-z]/igm);
            let amount_check = amount.value.match(/^[1-9][0-9]*$/igm);

            if (title_check === null) {
                alert("Title should contain letters");
            } else if (author_check === null) {
                alert("Author name should contain letters");
            } else if (amount_check === null) {
                alert("Amount should not contain letters or be smaller than 0 and equal to 0");
            } else {
                books.push({
                    title: book_title.value,
                    author: author_title.value,
                    "amount": Number(amount.value)
                });
                if (books.length === 0) {
                    table.style.cssText = "display:none !important";
                    noBookTitle.style.cssText = "display:block !important";;
                } else {
                    table.style.cssText = "display:table !important";
                    noBookTitle.style.cssText = "display:none !important";
                }

                localStorage.setItem('items', JSON.stringify(books));
                books = JSON.parse(localStorage.getItem('items'));
                addBook();
                document.querySelector(".__books_modal").remove();
            }
        }

    }

}

addBookBtn_link.onclick = function () {
    container.insertAdjacentHTML("afterend", `
    <div class="__books_modal">
    <div class="__overlay">
        <div class="__modal">
            <button class="__modal_close">
                <i class="bi bi-x"></i>
            </button>
            <div class="__edit_from">
                <span class="modal_title">Add book:</span>
                <div class="title">
                    <label for="title">Title:</label>
                    <input type="text" id="title">
                </div>
                <div class="author">
                    <label for="author">Author:</label>
                    <input type="text" id="author">
                </div>
                <div class="amount">
                    <label for="amount">Amount:</label>
                    <input type="number" id="amount">
                </div>
                <div class="save_btn">
                    <button class="btn btn-outline-dark" id="book_save">Save</button>
                </div>
            </div>
        </div>
    </div>
</div>`);
    let book_title = document.getElementById("title");
    let author_title = document.getElementById("author");
    let amount = document.getElementById("amount");
    let book_save = document.getElementById("book_save");
    let closeModal = document.querySelector(".__modal_close");

    closeModal.onclick = function () {
        document.querySelector(".__books_modal").remove();
    };

    book_save.onclick = function () {


        if (book_title.value.length === 0) {
            alert("Title must not be empty");
        } else if (author_title.value.length === 0) {
            alert("Author name must not be empty");
        } else if (amount.value.length === 0) {
            alert("Amount must not be empty");
        } else {
            let title_check = book_title.value.match(/[a-z]/igm);
            let author_check = author_title.value.match(/[A-Za-z]/igm);
            let amount_check = amount.value.match(/^[1-9][0-9]*$/igm);

            if (title_check === null) {
                alert("Title should contain letters");
            } else if (author_check === null) {
                alert("Author name should contain letters");
            } else if (amount_check === null) {
                alert("Amount should not contain letters or be smaller than 0 and equal to 0");
            } else {
                books.push({
                    title: book_title.value,
                    author: author_title.value,
                    "amount": Number(amount.value)
                });
                if (books.length === 0) {
                    table.style.cssText = "display:none !important";
                    noBookTitle.style.cssText = "display:block !important";;
                } else {
                    table.style.cssText = "display:table !important";
                    noBookTitle.style.cssText = "display:none !important";
                }

                localStorage.setItem('items', JSON.stringify(books));
                books = JSON.parse(localStorage.getItem('items'));
                addBook();
                document.querySelector(".__books_modal").remove();
            }
        }

    }

}



if (books.length === 0) {
    table.style.cssText = "display:none !important";
    noBookTitle.style.cssText = "display:block !important";
} else {
    table.style.cssText = "display:table !important";
    noBookTitle.style.cssText = "display:none !important";
}


// book edit

let editBtn = document.querySelectorAll(".__edit_btn");

for(let i = 0; i < editBtn.length; i++){
    editBtn[i].onclick = function(){
        container.insertAdjacentHTML("afterend", `
    <div class="__books_modal">
    <div class="__overlay">
        <div class="__modal">
            <button class="__modal_close">
                <i class="bi bi-x"></i>
            </button>
            <div class="__edit_from">
                <span class="modal_title">Edit book(${books[i].title}):</span>
                <div class="title">
                    <label for="title">Title:</label>
                    <input type="text" id="title">
                </div>
                <div class="author">
                    <label for="author">Author:</label>
                    <input type="text" id="author">
                </div>
                <div class="amount">
                    <label for="amount">Amount:</label>
                    <input type="number" id="amount">
                </div>
                <div class="save_btn">
                    <button class="btn btn-outline-dark" id="book_save">Save</button>
                </div>
                <div class="delete_btn">
                    <button class="btn btn-outline-danger my-2" id="book_delete">Delete book</button>
                </div>
            </div>
        </div>
    </div>
</div>`);
let book_title = document.getElementById("title");
    let author_title = document.getElementById("author");
    let amount = document.getElementById("amount");
    let book_save = document.getElementById("book_save");
    let closeModal = document.querySelector(".__modal_close");
    let book_delete = document.getElementById("book_delete");

    book_title.value = books[i].title;
    author_title.value = books[i].author;
    amount.value = books[i].amount;

    closeModal.onclick = function () {
        document.querySelector(".__books_modal").remove();
    };

    book_delete.onclick = function(){
        books.splice(i,1);
        localStorage.setItem('items', JSON.stringify(books));
        books = JSON.parse(localStorage.getItem('items'));
        document.querySelector(".__books_modal").remove();
        location.reload();
    };

    book_save.onclick = function () {


        if (book_title.value.length === 0) {
            alert("Title must not be empty");
        } else if (author_title.value.length === 0) {
            alert("Author name must not be empty");
        } else if (amount.value.length === 0) {
            alert("Amount must not be empty");
        } else {
            let title_check = book_title.value.match(/[a-z]/igm);
            let author_check = author_title.value.match(/[A-Za-z]/igm);
            let amount_check = amount.value.match(/[0-9]/igm);

            if (title_check === null) {
                alert("Title should contain letters");
            } else if (author_check === null) {
                alert("Author name should contain letters");
            } else if (amount_check === null) {
                alert("Author should contain letters");
            } else {
                books.splice(i,1,{
                    title: book_title.value,
                    author: author_title.value,
                    "amount": Number(amount.value)
                });
                location.reload();
                if (books.length === 0) {
                    table.style.cssText = "display:none !important";
                    noBookTitle.style.cssText = "display:block !important";;
                } else {
                    table.style.cssText = "display:table !important";
                    noBookTitle.style.cssText = "display:none !important";
                }

                localStorage.setItem('items', JSON.stringify(books));
                books = JSON.parse(localStorage.getItem('items'));
                document.querySelector(".__books_modal").remove();
            }
        }

    }
}
}
    
// book sort

let sortSelect = document.getElementById("sort_select");
let sortBtn = document.getElementById("book_sort");
let selectedArr = [{amount: false, title: false, author:false}];
let selectedFromStrg = JSON.parse(localStorage.getItem('selected'));

sortBtn.onclick = function(){

    if(sortSelect.value === "amount"){
        books.sort(function (a, b) {
            if (a.amount > b.amount) {
              return 1;
            }
            if (a.amount < b.amount) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('items', JSON.stringify(books));
          books = JSON.parse(localStorage.getItem('items'));
          selectedArr = [{amount: true, title: false, author:false}];
          localStorage.setItem("selected", JSON.stringify(selectedArr));
          selectedFromStrg = JSON.parse(localStorage.getItem('selected'));
          location.reload();
          
    }
    else if(sortSelect.value === "title"){
        books.sort(function (a, b) {
            if (a.title.toUpperCase() > b.title.toUpperCase()) {
              return 1;
            }
            if (a.title.toUpperCase() < b.title.toUpperCase()) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('items', JSON.stringify(books));
          books = JSON.parse(localStorage.getItem('items'));
          selectedArr = [{amount: false, title: true, author:false}];
          localStorage.setItem("selected", JSON.stringify(selectedArr));
          selectedFromStrg = JSON.parse(localStorage.getItem('selected'));
          location.reload(); 
    }
    else if(sortSelect.value === "author"){
        books.sort(function (a, b) {
            if (a.author.toUpperCase() > b.author.toUpperCase()) {
              return 1;
            }
            if (a.author.toUpperCase() < b.author.toUpperCase()) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('items', JSON.stringify(books));
          books = JSON.parse(localStorage.getItem('items'));
          selectedArr = [{amount: false, title: false, author:true}];
          localStorage.setItem("selected", JSON.stringify(selectedArr));
          selectedFromStrg = JSON.parse(localStorage.getItem('selected'));
          location.reload(); 
    }
}


if(localStorage.getItem("selected")){
    if(selectedFromStrg[0]["amount"] === true){
        sortSelect[2].selected = true; 
    }
    else if(selectedFromStrg[0]["title"] === true){
        sortSelect[0].selected = true; 
    }
    else if(selectedFromStrg[0]["author"] === true){
        sortSelect[1].selected = true; 
    }
}


// search

let searchBtn = document.getElementById("search_btn");
let searchInput = document.getElementById("search_input");

searchBtn.onclick = function(){
    if(window.find(searchInput.value)){
        window.find(searchInput.value);
    }
    else{
        alert("Can't find what you're looking for. Try another value");
    }
}
