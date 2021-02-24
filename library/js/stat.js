let container = document.querySelector(".container-fluid");
let statistic = localStorage.getItem("items") ? JSON.parse(localStorage.getItem('items')) : [];
let visitors = localStorage.getItem("visitors") ? JSON.parse(localStorage.getItem('visitors')) : [];
let table = document.getElementById("stat_table");
let sortBtn = document.getElementById("sort")
let select = document.getElementById("stat_select");


    statistic.sort(function (a, b) {
        if (a.amount < b.amount) {
            return 1;
        }
        if (a.amount > b.amount) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    
    });
    localStorage.setItem('stat', JSON.stringify(statistic[0]));
    statistic = JSON.parse(localStorage.getItem('stat'));
    
    console.log(statistic);
    
    
    table.children[1].insertAdjacentHTML("beforeend", `<tr>
            <th scope="row">1</th>
            <td>${statistic.title}</td>
            <td>${statistic.author}</td>
            <td>${statistic.amount}</td>
          </tr>`)







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