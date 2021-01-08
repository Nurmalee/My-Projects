let clickMeButton = document.getElementsByClassName("click-me")[0];
let colorCodeArea = document.getElementsByTagName("span")[0];
let colorInput = document.getElementById("color-input");
let toggleButton = document.getElementById("toggle-btn");
let navList = document.getElementById("nav-list");


listeners();

function listeners(){
    clickMeButton.addEventListener("click", function(){
        ifHex();
    })
    
    colorInput.addEventListener("keypress", function(e){
        if(e.which === 13){
            ifHex();
        }
    })
    
    toggleButton.addEventListener("click", function(){
        navList.classList.toggle("toggle-nav-links");
    })
}

function randomRGB(){
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    return "rgb("+ r +", "+ g +", "+ b +")";
}

function randomHEX(len){
    let hexColor = "#";
    let colorCharacters = "0123456789ABCDEF";
    for(let i = 0; i < len; i++){
        hexColor += colorCharacters.charAt(Math.floor(Math.random() * colorCharacters.length));
    }
    return hexColor;
}

function ifHex(){
    if(colorInput.value !== "HEX"){
        document.body.style.backgroundColor = randomRGB();
        colorCodeArea.textContent = document.body.style.backgroundColor;
    } else {
        colorCodeArea.textContent = randomHEX(6);
        document.body.style.backgroundColor = colorCodeArea.textContent; 
    }
}