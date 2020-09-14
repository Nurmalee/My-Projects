let porscheArr =
[
    {
        image1: "images/Porsche-taycan-1.png",
        image2: "images/Porsche-taycan-5.jpeg",
        image3: "images/Porsche-taycan-6.jpeg",
        image4: "images/Porsche-taycan-7.jpeg",
        type: "Taycan S",
        distance: "412km",
        time: "6.8s",
        hp: "560",
        backlay: "TAYCAN",
    },
    {
        image1: "images/carrera-0.png",
        image2: "images/carrera-1.jpeg",
        image3: "images/carrera-2.jpeg",
        image4: "images/carrera-3.jpeg",
        type: " 411 Carrera S",
        distance: "401km",
        time: "6.2s",
        hp: "530",
        backlay: "CARRERA",
    },
    {
        image1: "images/cayman-0.png",
        image2: "images/cayman-1.jpeg",
        image3: "images/cayman-2.jpeg",
        image4: "images/cayman-3.jpeg",
        type: "Cayman GT 411",
        distance: "390km",
        time: "5.9s",
        hp: "510",
        backlay: "CAYMAN",
    },
]

let carMainImage = document.querySelector("#car-main-image");
let porscheType = document.querySelector("#porsche-type");
let porscheDIstance = document.querySelector("#porsche-distance");
let porscheTime = document.querySelector("#porsche-time");
let porscheHp = document.querySelector("#porsche-hp");
let carImage1 = document.querySelector("#car-image-1");
let carImage2 = document.querySelector("#car-image-2");
let carImage3 = document.querySelector("#car-image-3");
let backLay = document.querySelector("#backlay");
let arrows = document.querySelectorAll(".arrow");

let currentPorsche = 0;


arrows.forEach(function(arrow){
    arrow.addEventListener("click", function(){
        if(arrow.classList.contains("fa-arrow-alt-circle-right")){
            currentPorsche++;
            if(currentPorsche === porscheArr.length){
                currentPorsche = 0;
            }
        } else {
            currentPorsche --;
            if(currentPorsche < 0){
                currentPorsche = (porscheArr.length - 1);
            }
        }
        startGarage();
    })
})

function startGarage(){
    carMainImage.src = porscheArr[currentPorsche].image1;
    carImage1.src = porscheArr[currentPorsche].image2;
    carImage2.src = porscheArr[currentPorsche].image3;
    carImage3.src = porscheArr[currentPorsche].image4;
    porscheType.innerHTML =  porscheArr[currentPorsche].type;
    porscheDIstance.innerHTML =  porscheArr[currentPorsche].distance;
    porscheTime.innerHTML =  porscheArr[currentPorsche].time;
    porscheHp.innerHTML =  porscheArr[currentPorsche].hp;
    backLay.innerHTML =  porscheArr[currentPorsche].backlay;
}