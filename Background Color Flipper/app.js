let colorArea = document.querySelector("h1");
let colorCode = document.querySelector("span");
let button = document.querySelectorAll("button");
let colorScaleRef = document.querySelector("#color-scaleRef");
let site = document.getElementById("site")

colors = ["teal", "steeleblue", "brown", "coral", "orange", "red"];

buttonListeners();

function buttonListeners(){
    for(let i = 0; i < button.length; i++){
        button[i].addEventListener("click", function(){
            if(this.textContent == "Simple"){
                pickRandomColor();
                document.body.style.backgroundColor = pickRandomColor();
                colorCode.textContent = document.body.style.backgroundColor;
            }
            if(this.textContent === "RGB SCALE"){
                randomRGB();
                document.body.style.backgroundColor = randomRGB();
                colorCode.textContent = document.body.style.backgroundColor;
            }
            if(this.textContent == "HEX SCALE"){
                randomHEX(6);
                colorCode.textContent = randomHEX(6);
                document.body.style.backgroundColor = colorCode.textContent;
            }
            site.style.backgroundColor = document.body.style.backgroundColor;
            site.style.border = "5px";
        })
    
        colorScaleRef.addEventListener("click", function(){
            if(button[i].textContent === "RGB SCALE"){
                button[i].textContent = "HEX SCALE";
            } 
            else if(button[i].textContent === "HEX SCALE"){
                button[i].textContent = "RGB SCALE"
            }
        })
    }
}

function pickRandomColor(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function randomRGB(){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    // console.log("rgb(" + r + ", " + g + ", " + b + ")");
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomHEX(len){
    let hexColor = "#";
    const characters = "0123456789ABCDEF";
    for(let i = 0; i < len; i++){
        hexColor += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return hexColor;
}

setInterval(function(){
    site.style.color = randomRGB();
}, 100)