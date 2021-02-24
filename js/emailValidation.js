const REGEXP = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let form = document.getElementById("form");
let input = document.getElementById("email_input");

form.onsubmit = function(){
    if(input.value.match(REGEXP)){
        console.log(`Your email: ${input.value}`);    
    }
    else if(input.value.length === 0){
        input.style.border = "2px solid rgb(240 180 0)";
        input.insertAdjacentHTML('beforebegin', `
        <span style="color:rgb(240 180 0); 
                     position: absolute;
                     top:6.5rem;
                     font-family: 'Roboto', sans-serif;
                     ">
            Email field is empty
        </span>
        `);  
    }
    else{
        input.style.border = "2px solid red";
        input.insertAdjacentHTML('beforebegin', `
        <span style="color:red; 
                     position: absolute;
                     top:6.5rem;
                     font-family: 'Roboto', sans-serif;
                     ">
            Please, write correct e-mail
        </span>
        `);
    }
    return false;
}

form.oninput = function(){
    if(form.children.length === 3){
        form.children[0].remove();
        input.style.border = "0px solid transparent"
    }
}
