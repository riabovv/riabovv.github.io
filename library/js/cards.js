

let container = document.querySelector(".container-fluid");

// Card addition
let addCardBtn = document.getElementById("add_new_card");
let addCardBtn_link = document.getElementById("add_card_link");
let cards = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem('cards')) : [];
let table = document.getElementById("cards_table");
let noCardTitle = document.getElementById("no-card");


if (cards.length > 0) {
    for (let i = 0; i < cards.length; i++) {
        table.children[1].insertAdjacentHTML("beforeend", `<tr>
        <th scope="row">${i+1}</th>
        <td>${cards[i].visitor}</td>
        <td>${cards[i].book}</td>
        <td>${cards[i].borrowDate}</td>
        <td>${cards[i].returnDate}</td>
      </tr>`)
    }
}

function addCard() {

    if (cards.length === 0) {
        for (let i = 0; i < books.length; i++) {
            table.children[1].insertAdjacentHTML("beforeend", `<tr>
            <th scope="row">${i+1}</th>
        <td>${cards[i].visitor}</td>
        <td>${cards[i].book}</td>
        <td>${cards[i].borrowDate}</td>
        <td>${cards[i].returnDate}</td>
          </tr>`);

        }

    } else {
        for (let i = cards.length - 1; i < cards.length; i++) {
            table.children[1].insertAdjacentHTML("beforeend", `<tr>
            <th scope="row">${i+1}</th>
        <td>${cards[i].visitor}</td>
        <td>${cards[i].book}</td>
        <td>${cards[i].borrowDate}</td>
        <td>${cards[i].returnDate}</td>
          </tr>`);

        }
    }
    location.reload();
}



addCardBtn.onclick = function () {
    container.insertAdjacentHTML("afterend", `
    <div class="__cards_modal">
        <div class="__overlay">
            <div class="__modal">
                <button class="__modal_close">
                    <i class="bi bi-x"></i>
                </button>
                <div class="__edit_from">
                    <span class="modal_title">Add new card:</span>
                    <div class="visitor">
                        <label for="visitor">Visitor:</label>
                        <select id="visitor">
                           
                        </select>
                    </div>
                    <div class="book">
                        <label for="book">Book:</label>
                        <select id="book">
                            
                        </select>
                    </div>
                    <div class="borrow">
                        <label for="borrow">Borrow date:</label>
                        <span class="format_title">Format: (mm/dd/yyyy)</span>
                        <input type="date" id="borrow">
                    </div>
                    <div class="return">
                        <label for="return">Return date:</label>
                        <span class="format_title">Format: (mm/dd/yyyy)</span>
                        <input type="date" id="returnBook">
                    </div>
                    <div class="save_btn">
                        <button class="btn btn-outline-dark" id="card_save">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`);

    let Visitors = JSON.parse(localStorage.getItem("visitors"));
    let Books = JSON.parse(localStorage.getItem("items"))
    let visitor_select = document.getElementById("visitor");
    let book_select = document.getElementById("book");
    let borrow = document.getElementById("borrow");
    let returnBook = document.getElementById("returnBook");
    let card_save = document.getElementById("card_save");
    let closeModal = document.querySelector(".__modal_close");

    for(let i = 0; i < Visitors.length; i++){
        visitor_select.insertAdjacentHTML('beforeend', `
        <option value="${Visitors[i].fullname}">${Visitors[i].fullname}</option>
        `)
    }
    for(let i = 0; i < Books.length; i++){
        book_select.insertAdjacentHTML('beforeend', `
        <option value="${Books[i].title}">${Books[i].title}</option>
        `)
    }
    closeModal.onclick = function () {
        document.querySelector(".__cards_modal").remove();
    };

    card_save.onclick = function () {

        if(borrow.value === ""){
            alert("Please, choose borrow date");
        }
        else if(returnBook.value === ""){
            alert("Please, choose return date");
        }
        else{
                cards.push({
                    visitor: visitor_select.value,
                    book: book_select.value,
                    borrowDate: borrow.value,
                    returnDate: returnBook.value                   
                });
                if (cards.length === 0) {
                    table.style.cssText = "display:none !important";
                    noCardTitle.style.cssText = "display:block !important";;
                } else {
                    table.style.cssText = "display:table !important";
                    noCardTitle.style.cssText = "display:none !important";
                }

                localStorage.setItem('cards', JSON.stringify(cards));
                cards = JSON.parse(localStorage.getItem('items'));
                addCard();
                document.querySelector(".__cards_modal").remove();
            }
        }         
}


addCardBtn_link.onclick = function(){
    container.insertAdjacentHTML("afterend", `
    <div class="__cards_modal">
        <div class="__overlay">
            <div class="__modal">
                <button class="__modal_close">
                    <i class="bi bi-x"></i>
                </button>
                <div class="__edit_from">
                    <span class="modal_title">Add new card:</span>
                    <div class="visitor">
                        <label for="visitor">Visitor:</label>
                        <select id="visitor">
                           
                        </select>
                    </div>
                    <div class="book">
                        <label for="book">Book:</label>
                        <select id="book">
                            
                        </select>
                    </div>
                    <div class="borrow">
                        <label for="borrow">Borrow date:</label>
                        <span class="format_title">Format: (mm/dd/yyyy)</span>
                        <input type="date" id="borrow">
                    </div>
                    <div class="return">
                        <label for="return">Return date:</label>
                        <span class="format_title">Format: (mm/dd/yyyy)</span>
                        <input type="date" id="returnBook">
                    </div>
                    <div class="save_btn">
                        <button class="btn btn-outline-dark" id="card_save">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`);

    let Visitors = JSON.parse(localStorage.getItem("visitors"));
    let Books = JSON.parse(localStorage.getItem("items"))
    let visitor_select = document.getElementById("visitor");
    let book_select = document.getElementById("book");
    let borrow = document.getElementById("borrow");
    let returnBook = document.getElementById("returnBook");
    let card_save = document.getElementById("card_save");
    let closeModal = document.querySelector(".__modal_close");

    for(let i = 0; i < Visitors.length; i++){
        visitor_select.insertAdjacentHTML('beforeend', `
        <option value="${Visitors[i].fullname}">${Visitors[i].fullname}</option>
        `)
    }
    for(let i = 0; i < Books.length; i++){
        book_select.insertAdjacentHTML('beforeend', `
        <option value="${Books[i].title}">${Books[i].title}</option>
        `)
    }
    closeModal.onclick = function () {
        document.querySelector(".__cards_modal").remove();
    };

    card_save.onclick = function () {

        if(borrow.value === ""){
            alert("Please, choose borrow date");
        }
        else if(returnBook.value === ""){
            alert("Please, choose return date");
        }
        else{
                cards.push({
                    visitor: visitor_select.value,
                    book: book_select.value,
                    borrowDate: borrow.value,
                    returnDate: returnBook.value                   
                });
                if (cards.length === 0) {
                    table.style.cssText = "display:none !important";
                    noCardTitle.style.cssText = "display:block !important";;
                } else {
                    table.style.cssText = "display:table !important";
                    noCardTitle.style.cssText = "display:none !important";
                }

                localStorage.setItem('cards', JSON.stringify(cards));
                cards = JSON.parse(localStorage.getItem('items'));
                addCard();
                document.querySelector(".__cards_modal").remove();
            }
        } 
}

if (cards.length === 0) {
    table.style.cssText = "display:none !important";
    noCardTitle.style.cssText = "display:block !important";
} else {
    table.style.cssText = "display:table !important";
    noCardTitle.style.cssText = "display:none !important";
}

// card sort

let sortSelectCard = document.getElementById("card_select");
let sortBtn = document.getElementById("card_sort");
let selectedArr = [{id: false, visitor: false, book:false, borrow:false, returnDate:false}];
let selectedFromStrgCard = JSON.parse(localStorage.getItem('selectedCard'));

sortBtn.onclick = function(){

    if(sortSelectCard.value === "visitor"){
        cards.sort(function (a, b) {
            if (a.visitor > b.visitor) {
              return 1;
            }
            if (a.visitor < b.visitor) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('cards', JSON.stringify(cards));
          cards = JSON.parse(localStorage.getItem('cards'));
          selectedArr = [{id: false, visitor: true, book:false, borrow:false, returnDate:false}];
          localStorage.setItem("selectedCard", JSON.stringify(selectedArr));
          selectedFromStrgCard = JSON.parse(localStorage.getItem('selectedCard'));
          location.reload();
          
    }
    else if(sortSelectCard.value === "book"){
        cards.sort(function (a, b) {
            if (a.book.toUpperCase() > b.book.toUpperCase()) {
              return 1;
            }
            if (a.book.toUpperCase() < b.book.toUpperCase()) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('cards', JSON.stringify(cards));
          cards = JSON.parse(localStorage.getItem('cards'));
          selectedArr = [{id: false, visitor: false, book:true, borrow:false, returnDate:false}];
          localStorage.setItem("selectedCard", JSON.stringify(selectedArr));
          selectedFromStrgCard = JSON.parse(localStorage.getItem('selectedCard'));
          location.reload(); 
    }
    else if(sortSelectCard.value === "borrow"){
        cards.sort(function (a, b) {
            if (a.borrowDate > b.borrowDate) {
              return 1;
            }
            if (a.borrowDate < b.borrowDate) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('cards', JSON.stringify(cards));
          cards = JSON.parse(localStorage.getItem('cards'));
          selectedArr = [{id: false, visitor: false, book:false, borrow:true, returnDate:false}];
          localStorage.setItem("selectedCard", JSON.stringify(selectedArr));
          selectedFromStrgCard = JSON.parse(localStorage.getItem('selectedCard'));
          location.reload();  
    }
    else if(sortSelectCard.value === "returnDate"){
        cards.sort(function (a, b) {
            if (a.returnDate > b.returnDate) {
              return 1;
            }
            if (a.returnDate < b.returnDate) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('cards', JSON.stringify(cards));
          cards = JSON.parse(localStorage.getItem('cards'));
          selectedArr = [{id: false, visitor: false, book:false, borrow:false, returnDate:true}];
          localStorage.setItem("selectedCard", JSON.stringify(selectedArr));
          selectedFromStrgCard = JSON.parse(localStorage.getItem('selectedCard'));
          location.reload();   
    }
}

if(localStorage.getItem("selected")){
    if(selectedFromStrgCard[0]["visitor"] === true){
        sortSelectCard[1].selected = true; 
    }
    else if(selectedFromStrgCard[0]["book"] === true){
        sortSelectCard[2].selected = true; 
    }
    else if(selectedFromStrgCard[0]["borrow"] === true){
        sortSelectCard[3].selected = true; 
    }
    else if(selectedFromStrgCard[0]["returnDate"] === true){
        sortSelectCard[4].selected = true; 
    }
}


//search

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

