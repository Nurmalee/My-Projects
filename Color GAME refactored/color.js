let numOfColor = 6;
let colorsArray = [];
let pickedColor;

let squares = document.getElementsByClassName("squares");
let title = document.querySelector(".title h1");
let pickedColorDisplay = document.getElementById("color-display");
let textDisplay = document.querySelector(".but-area p");
let buttonArea = document.querySelector("div.but-area")

let mode = document.querySelectorAll(".modebut");
let resetbutton = document.getElementById("reset");

initiateGame();

function initiateGame(){
    resetGame();
    activateSqrListeners();
    buttonsAction();
}

function resetGame(){
    colorsArray = generateRandomColors(numOfColor);
    pickedColor = pickAnyColor();
    pickedColorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colorsArray[i]){
            //apply colorsArray to squares in  order of i;
            squares[i].style.backgroundColor = colorsArray[i];
            squares[i].style.display = "block";
        } else{
            squares[i].style.display = "none";
        }
    }
    textDisplay.textContent = "";
    resetbutton.textContent = "NEW COLORS";
    title.style.backgroundColor = "teal";
    buttonArea.style.backgroundColor = "teal";
}

function activateSqrListeners(){
    for(let i = 0; i < squares.length; i++){
        //add click event listener to squares; 
        squares[i].addEventListener("click", function(){
            let clickedColor = squares[i].style.backgroundColor;
            if(clickedColor === pickedColor){
                applyPickedColor(pickedColor);
                title.style.backgroundColor = pickedColor;
                buttonArea.style.backgroundColor = pickedColor;
                textDisplay.textContent = "Excellente!";
                resetbutton.textContent = "PLAY AGAIN?";
            } else {
                this.style.backgroundColor = "#232323";
                this.innerHTML = "<h1>WRONG COLOR</h1>";
                textDisplay.textContent = "Try Again!";
            }
        })
    }
}

function buttonsAction(){
    //logic for behaviour of game level buttons
    for(let i = 0; i < mode.length; i++){
        // mode[i].addEventListener("click", function(){
        //     if(this.textContent === "easy"){
        //         numOfColor = 3;
        //     } else{
        //         numOfColor = 6;
        //     }
        //     // mode[0].classList.remove("button-active");
        //     // mode[1].classList.remove("button-active");
        //     // this.classList.add("button-active");
        //     for(let i = 0; i < squares.length; i++){
        //         squares[i].innerHTML = "";
        //     }
        //     resetGame();
        // })
        mode[i].addEventListener("mouseover", function(){
            this.style.backgroundColor = "black";
            this.style.color = "white";
            if(this.textContent === "easy"){
                numOfColor = 3;
            } else{
                numOfColor = 6;
            }
            for(let i = 0; i < squares.length; i++){
                squares[i].innerHTML = "";
            }
            resetGame();
        })
        mode[i].addEventListener("mouseout", function(){
            this.style.backgroundColor = "white";
            this.style.color = "black";
        })
    }

    resetbutton.addEventListener("click", function(){
        resetGame();
    })
}


/*******   OTHER FUNCTION INTEGRAL TO GAME LOGIC   *******/

// create function() to apply pickedColor across all squares
function applyPickedColor(colorEntity){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colorEntity;
        squares[i].innerHTML = "";
    }
}

// create function() to randomly select any one color from colorsArray
function pickAnyColor(){
    let randomNumber = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomNumber];
}

// generate r, g and b, then incoporate into rgb;
function randomRGB(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb("+ r +", "+ g +", "+ b +")";
}

// create random colors funtion(): use randomRGB to generate 6 random colors
function generateRandomColors(numOfColor){
    let arr = [];
    for(let i = 0; i < numOfColor; i++){
        arr.unshift(randomRGB());
    }
    return arr;
}

// document.querySelector("#tester").addEventListener("mouseover", function(){
//     this.style.fontWeight = "bolder";
//     this.style.backgroundColor = "white";
// })

// document.querySelector("#tester").addEventListener("mouseleave", function(){
//     this.style.fontWeight = "normal";
//     this.style.backgroundColor = "teal";
// })

// document.querySelector("input[type='text']").addEventListener("keypress", function(e){
//     if(e.which === 13){
//         document.querySelector("body").style.backgroundColor = "teal";
//     }  
// })