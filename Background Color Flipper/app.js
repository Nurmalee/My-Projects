let colorArea = document.querySelector("h1");
let colorCode = document.querySelector("span");
let button = document.querySelectorAll("button");
let colorScaleRef = document.querySelector("#color-scaleRef");
let site = document.getElementById("site")

colors1 = ["teal", "steeleblue", "brown", "coral", "orange", "red"];
colors2 = ["rgb(151, 53, 37)", "rgb(236, 153, 61)", "rgb(44, 214, 40)", "rgb(202, 103, 128)", "rgb(91, 152, 230)", "rgb(53, 78, 14)"];
// button.addEventListener("click", function(){
//     pickRandomColor();
//     // console.log (pickRandomColor());
//     body.style.backgroundColor = pickRandomColor();
//     colorCode.textContent = body.style.backgroundColor;
// })

// colorScaleRef.addEventListener("click", function(){
//     if(button.textContent === "RGB SCALE"){
//         button.textContent = "HEX SCALE";
//     } 
//     else if(button.textContent === "HEX SCALE"){
//         button.textContent = "RGB SCALE"
//     }
// })
let siteStyle = {
    backgroundColor: "blue",
    border: "2px solid black",
    borderRadius: "5px"
    // THIS OBJECT WAS CREATED TO TRY TO AVOID 
    // REPETIION OF SITE.STYLE ON BUTTON CLICK
    // BUT IMPLEMENTATION WAS NOT ENTIRELY UNSUCCESSFUL;

}

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
            site.style.border = siteStyle.border;
            // site.style.borderRadius = siteStyle.borderRadius;
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
    let randomIndex = Math.floor(Math.random() * colors1.length);
    return colors1[randomIndex];
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


// function randomHEX(len){
//     let hexColor = "";
//     let charactersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     for(let i = 0; i < len; i++){
//         hexColor += charactersArr[Math.floor(Math.random() * charactersArr.length)];
//     }
//     return "#" + hexColor;
// }