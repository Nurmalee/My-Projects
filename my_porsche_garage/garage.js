let porscheArr =
[
    {
        // image1: "images/Porsche-taycan-1.png",
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
        // image1: "images/carrera-0.png",
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
        // image1: "images/cayman-0.png",
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

let carScrollContainer = document.querySelector("#car-image");
let carScrollImages = document.querySelectorAll("#car-image img");
let porscheType = document.querySelector("#porsche-type");
let porscheDIstance = document.querySelector("#porsche-distance");
let porscheTime = document.querySelector("#porsche-time");
let porscheHp = document.querySelector("#porsche-hp");
let carImage1 = document.querySelector("#car-image-1");
let carImage2 = document.querySelector("#car-image-2");
let carImage3 = document.querySelector("#car-image-3");
let backLay = document.querySelector(".backlay");
let arrows = document.querySelectorAll(".arrow");
const driveBtn = document.querySelector(".drive-btn");

let carIndex = 0;

setInterval(() => {
    driveBtn.classList.toggle("drive");
}, 2000)

setInterval(() => {
    backLay.classList.toggle("backlay-ffect");
}, 5000)

function startGarage(){
    // carScrollImg.setAttribute('src', porscheArr[currentPorsche].image1)
    carImage1.src = porscheArr[carIndex].image2;
    carImage2.src = porscheArr[carIndex].image3;
    carImage3.src = porscheArr[carIndex].image4;
    porscheType.textContent =  porscheArr[carIndex].type;
    porscheDIstance.textContent =  porscheArr[carIndex].distance;
    porscheTime.textContent =  porscheArr[carIndex].time;
    porscheHp.textContent =  porscheArr[carIndex].hp;
    backLay.textContent =  porscheArr[carIndex].backlay;
}


arrows.forEach(function(arrow){
    arrow.addEventListener("click", function(){
        //MAKES SURE CARINDEX INCREMENTS/DECREMENTS BUT STAYS WITHIN RANGE OF NODELIST/ARRAY
        if(arrow.classList.contains("fa-arrow-alt-circle-right")){
            carIndex++;
            if(carIndex === carScrollImages.length){
                carIndex = 0;
            }
        } else {
            carIndex --;
            if(carIndex < 0){
                carIndex = carScrollImages.length - 1;
            }
        }

        //NOT DYNAMIC PER SAY: BUT TO SIMULATE A DYNAMIC APPLICATION OF CLASSES FOR SWIPPING EFFECT
        carScrollImages.forEach(image => {
            if(carIndex == image.dataset.id){
                image.className = ''
                image.classList.add('currentSlide')
            } else if (carIndex < image.dataset.id) {
                image.className = ''
                image.classList.add('prevSlide')
            } else {
                image.className = ''
                image.classList.add('nextSlide')
            }
            // console.log(image);
        })

        // console.log(carIndex);
        startGarage();
        
    })
    
})

// const initiateGarage = () => {
    
//     arrows.forEach(function(arrow){
//         arrow.addEventListener("click", function(){
//             if(arrow.classList.contains("fa-arrow-alt-circle-right")){
//                 carIndex++;
//                 if(carIndex === porscheArr.length){
//                     carIndex = 0;
//                 }
//             } else {
//                 carIndex --;
//                 if(carIndex < 0){
//                     carIndex = porscheArr.length - 1;
//                 }
//             }
//             console.log(carIndex);
//             startGarage();
           
//         })
       
//     })
// }

// const carrArr = porscheArr.map((car, index) => {
//     const {image1} = car
//     let position = "nextSlide"

//     if(index === carIndex){
//         position = "currentSlide"
//     }

//     if(index === carIndex - 1 || (index < 0 && (index === porscheArr.length - 1))){
//         position = "prevSlide"
//     }

//     return (
//         `<img src=${image1} class=${position} alt="">`
//     )
// })

// carScrollContainer.innerHTML = carrArr.join("")