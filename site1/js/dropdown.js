let block = document.querySelectorAll("#blockAnswers");
let chevron = [
    document.querySelectorAll("#clickChevron"),
    document.querySelectorAll("#chevronText")
];
let down = false;
let color = "#495274";
let transition = '0.5s';

for(let i = 0; i < chevron[0].length; i++){
    chevron[0][i].addEventListener('click', function(){
        down = !down;
        
        if (down === true) {
            block[i].style.height = "218.8px";
            block[i].style.transition = transition;
            chevron[0][i].style.transform = "rotate(180deg)";
            chevron[0][i].children[0].attributes[0].value = color;
            chevron[0][i].style.transition = transition;
            chevron[1][i].style.color = color;
        } else {
            block[i].style.height = "79.2px";
            block[i].style.transition = transition;
            chevron[0][i].style.transform = "rotate(0deg)";
            chevron[0][i].children[0].attributes[0].value = '#8E96B7';
            chevron[1][i].style.color = '#8E96B7';
        }
        
    });
    chevron[1][i].addEventListener('click', function(){
        down = !down;
        
        if (down === true) {
            block[i].style.height = "218.8px";
            block[i].style.transition = transition;
            chevron[0][i].style.transform = "rotate(180deg)";
            chevron[0][i].children[0].attributes[0].value = color;
            chevron[0][i].style.transition = transition;
            chevron[1][i].style.color = color;
        } else {
            block[i].style.height = "79.2px";
            block[i].style.transition = transition;
            chevron[0][i].style.transform = "rotate(0deg)";
            chevron[0][i].children[0].attributes[0].value = '#8E96B7';
            chevron[1][i].style.color = '#8E96B7';
        }
        
    });
}


