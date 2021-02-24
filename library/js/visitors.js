let container = document.querySelector(".container-fluid");

//  Visitor addition
let addVisitorBtn = document.getElementById("add_new_visitor");
let addVisitorBtn_link = document.getElementById("add_visitor_link");
let visitors = localStorage.getItem("visitors") ? JSON.parse(localStorage.getItem('visitors')) : [];
let table = document.getElementById("visitors_table");
let noVisitorTitle = document.getElementById("no-visitor");


if (visitors.length > 0) {
    for (let i = 0; i < visitors.length; i++) {
        table.children[1].insertAdjacentHTML("beforeend", `<tr>
        <th scope="row">${i+1}</th>
            <td>${visitors[i].fullname}</td>
            <td>${visitors[i].phonenumber}</td>
        <td>
            <button class="__edit_btn"><i class="bi bi-pencil-fill"></i></button>
        </td>
      </tr>`)
    }
}

function addVisitor() {

    if (visitors.length === 0) {
        for (let i = 0; i < visitors.length; i++) {
            table.children[1].insertAdjacentHTML("beforeend", `<tr>
            <th scope="row">${i+1}</th>
            <td>${visitors[i].fullname}</td>
            <td>${visitors[i].phonenumber}</td>
            <td>
                <button class="__edit_btn"><i class="bi bi-pencil-fill"></i></button>
            </td>
          </tr>`);
            console.log(visitors[i])
        }

    } else {
        for (let i = visitors.length - 1; i < visitors.length; i++) {
            table.children[1].insertAdjacentHTML("beforeend", `<tr>
            <th scope="row">${i+1}</th>
            <td>${visitors[i].fullname}</td>
            <td>${visitors[i].phonenumber}</td>
            <td>
                <button class="__edit_btn"><i class="bi bi-pencil-fill"></i></button>
            </td>
          </tr>`);

        }
    }
    location.reload();
}



addVisitorBtn.onclick = function () {
    container.insertAdjacentHTML("afterend", `
    <div class="__visitors_modal">
        <div class="__overlay">
            <div class="__modal">
                <button class="__modal_close">
                    <i class="bi bi-x"></i>
                </button>
                <div class="__edit_from">
                    <span class="modal_title">Add visitor:</span>
                    <div class="fullname">
                        <label for="fullname">Full name:</label>
                        <input type="text" id="fullname">
                    </div>
                    <div class="phone_number">
                        <label for="phonenumber">Phone number</label>
                        <input type="number" id="phonenumber">
                    </div>
                    <div class="save_btn">
                        <button class="btn btn-outline-dark" id="visitor_save">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    let visitorFullname = document.getElementById("fullname");
    let visitorPhonenumber = document.getElementById("phonenumber");
    let visitor_save = document.getElementById("visitor_save");
    let closeModal = document.querySelector(".__modal_close");

    closeModal.onclick = function () {
        document.querySelector(".__visitors_modal").remove();
    };

    visitor_save.onclick = function () {


        if (visitorFullname.value.length === 0) {
            alert("Fullname field must not be empty");
        } else if (visitorPhonenumber.value.length === 0) {
            alert("Phone number must not be empty");
        }
        else {
            let fullname_check = visitorFullname.value.match(/[A-Za-z]/igm);
            let phonenumber_check = visitorPhonenumber.value.match(/[0-9]/igm);

            if (fullname_check === null) {
                alert("Fullname should contain letters");
            } else if (phonenumber_check === null) {
                alert("Phone number should contain letters");
            } 
            else {
                visitors.push({
                    fullname: visitorFullname.value,
                    phonenumber: visitorPhonenumber.value
                });
                if (visitors.length === 0) {
                    table.style.cssText = "display:none !important";
                    noVisitorTitle.style.cssText = "display:block !important";;
                } else {
                    table.style.cssText = "display:table !important";
                    noVisitorTitle.style.cssText = "display:none !important";
                }

                localStorage.setItem('visitors', JSON.stringify(visitors));
                visitors = JSON.parse(localStorage.getItem('visitors'));
                addVisitor();
                document.querySelector(".__visitors_modal").remove();
            }
        }

    }

}

addVisitorBtn_link.onclick = function () {
    container.insertAdjacentHTML("afterend", `
    <div class="__visitors_modal">
        <div class="__overlay">
            <div class="__modal">
                <button class="__modal_close">
                    <i class="bi bi-x"></i>
                </button>
                <div class="__edit_from">
                    <span class="modal_title">Add visitor:</span>
                    <div class="fullname">
                        <label for="fullname">Full name:</label>
                        <input type="text" id="fullname">
                    </div>
                    <div class="phone_number">
                        <label for="phonenumber">Phone number</label>
                        <input type="number" id="phonenumber">
                    </div>
                    <div class="save_btn">
                        <button class="btn btn-outline-dark" id="visitor_save">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    let visitorFullname = document.getElementById("fullname");
    let visitorPhonenumber = document.getElementById("phonenumber");
    let visitor_save = document.getElementById("visitor_save");
    let closeModal = document.querySelector(".__modal_close");

    closeModal.onclick = function () {
        document.querySelector(".__visitors_modal").remove();
    };

    visitor_save.onclick = function () {


        if (visitorFullname.value.length === 0) {
            alert("Fullname field must not be empty");
        } else if (visitorPhonenumber.value.length === 0) {
            alert("Phone number must not be empty");
        }
        else {
            let fullname_check = visitorFullname.value.match(/[A-Za-z]/igm);
            let phonenumber_check = visitorPhonenumber.value.match(/[0-9]/igm);

            if (fullname_check === null) {
                alert("Fullname should contain letters");
            } else if (phonenumber_check === null) {
                alert("Phone number should contain letters");
            } 
            else {
                visitors.push({
                    fullname: visitorFullname.value,
                    phonenumber: visitorPhonenumber.value
                });
                if (visitors.length === 0) {
                    table.style.cssText = "display:none !important";
                    noVisitorTitle.style.cssText = "display:block !important";;
                } else {
                    table.style.cssText = "display:table !important";
                    noVisitorTitle.style.cssText = "display:none !important";
                }

                localStorage.setItem('visitors', JSON.stringify(visitors));
                visitors = JSON.parse(localStorage.getItem('visitors'));
                addVisitor();
                document.querySelector(".__visitors_modal").remove();
            }
        }

    }

}



if (visitors.length === 0) {
    table.style.cssText = "display:none !important";
    noVisitorTitle.style.cssText = "display:block !important";
} else {
    table.style.cssText = "display:table !important";
    noVisitorTitle.style.cssText = "display:none !important";
}

// visitor edit

let editBtn = document.querySelectorAll(".__edit_btn");

for(let i = 0; i < editBtn.length; i++){
    editBtn[i].onclick = function(){
        container.insertAdjacentHTML("afterend", `
        <div class="__visitors_modal">
        <div class="__overlay">
            <div class="__modal">
                <button class="__modal_close">
                    <i class="bi bi-x"></i>
                </button>
                <div class="__edit_from">
                    <span class="modal_title">Edit visitor(${visitors[i].fullname}):</span>
                    <div class="fullname">
                        <label for="fullname">Full name:</label>
                        <input type="text" id="fullname">
                    </div>
                    <div class="phone_number">
                        <label for="phonenumber">Phone number</label>
                        <input type="number" id="phonenumber">
                    </div>
                    <div class="save_btn">
                        <button class="btn btn-outline-dark" id="visitor_save">Save</button>
                    </div>
                    <div class="delete_btn">
                        <button class="btn btn-outline-danger my-2" id="visitor_delete">Delete visitor</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
    let visitor_fullname = document.getElementById("fullname");
    let visitor_phonenumber = document.getElementById("phonenumber");
    let visitor_save = document.getElementById("visitor_save");
    let closeModal = document.querySelector(".__modal_close");
    let visitor_delete = document.getElementById("visitor_delete");

    visitor_fullname.value = visitors[i].fullname;
    visitor_phonenumber.value = visitors[i].phonenumber;

    closeModal.onclick = function () {
        document.querySelector(".__visitors_modal").remove();
    };

    visitor_delete.onclick = function(){
        visitors.splice(i,1);
        localStorage.setItem('visitors', JSON.stringify(visitors));
        visitors = JSON.parse(localStorage.getItem('visitors'));
        document.querySelector(".__visitors_modal").remove();
        location.reload();
    };

    visitor_save.onclick = function () {


        if (visitor_fullname.value.length === 0) {
            alert("Fullname field must not be empty");
        } else if (visitor_phonenumber.value.length === 0) {
            alert("Phone number must not be empty");
        }
        else {
            let fullname_check = visitor_fullname.value.match(/[A-Za-z]/igm);
            let phonenumber_check = visitor_phonenumber.value.match(/[0-9]/igm);

            if (fullname_check === null) {
                alert("Fullname should contain letters");
            } else if (phonenumber_check === null) {
                alert("Phone number should contain letters");
            } 
            else {
                visitors.splice(i,1,{
                    fullname: visitor_fullname.value,
                    phonenumber: visitor_phonenumber.value
                });
                location.reload();
                if (visitors.length === 0) {
                    table.style.cssText = "display:none !important";
                    noVisitorTitle.style.cssText = "display:block !important";;
                } else {
                    table.style.cssText = "display:table !important";
                    noVisitorTitle.style.cssText = "display:none !important";
                }

                localStorage.setItem('visitors', JSON.stringify(visitors));
                visitors = JSON.parse(localStorage.getItem('visitors'));
                document.querySelector(".__visitors_modal").remove();
            }
        }

    }
}
}

// visitor sort

let sortVisitorSelect = document.getElementById("visitor_sort_select");
let sortBtn = document.getElementById("visitorsSortBtn");
let selectedArr = [{id: false, fullname: false, t_number:false}];
let selectedFromStrgVisitors = JSON.parse(localStorage.getItem('visitorsSelected'));

sortBtn.onclick = function(){

    if(sortVisitorSelect.value === "id"){
        visitors.sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('visitors', JSON.stringify(visitors));
          visitors = JSON.parse(localStorage.getItem('visitors'));
          selectedArr = [{id: true, fullname: false, t_number:false}];
          localStorage.setItem("visitorsSelected", JSON.stringify(selectedArr));
          selectedFromStrgVisitors = JSON.parse(localStorage.getItem('visitorsSelected'));
          location.reload();
          
    }
    else if(sortVisitorSelect.value === "fullname"){
        visitors.sort(function (a, b) {
            if (a.fullname > b.fullname) {
              return 1;
            }
            if (a.fullname < b.fullname) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('visitors', JSON.stringify(visitors));
          visitors = JSON.parse(localStorage.getItem('visitors'));
          selectedArr = [{id: false, fullname: true, t_number:false}];
          localStorage.setItem("visitorsSelected", JSON.stringify(selectedArr));
          selectedFromStrgVisitors = JSON.parse(localStorage.getItem('visitorsSelected'));
          location.reload();
    }
    else if(sortVisitorSelect.value === "t_number"){
        visitors.sort(function (a, b) {
            if (a.phonenumber > b.phonenumber) {
              return 1;
            }
            if (a.phonenumber < b.phonenumber) {
              return -1;
            }
            // a должно быть равным b
            return 0;
          });
          localStorage.setItem('visitors', JSON.stringify(visitors));
          visitors = JSON.parse(localStorage.getItem('visitors'));
          selectedArr = [{id: false, fullname: false, t_number:true}];
          localStorage.setItem("visitorsSelected", JSON.stringify(selectedArr));
          selectedFromStrgVisitors = JSON.parse(localStorage.getItem('visitorsSelected'));
          location.reload(); 
    }
}


if(localStorage.getItem("visitorsSelected")){
    if(selectedFromStrgVisitors[0]["id"] === true){
        sortVisitorSelect[0].selected = true; 
    }
    else if(selectedFromStrgVisitors[0]["fullname"] === true){
        sortVisitorSelect[1].selected = true; 
    }
    else if(selectedFromStrgVisitors[0]["t_number"] === true){
        sortVisitorSelect[2].selected = true; 
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