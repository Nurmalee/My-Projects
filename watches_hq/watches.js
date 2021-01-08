let maleWatchArr = 
[
    {
        name: "Arcadia Fleurier",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$43.60",
        color: "brown",
        image: "./images/watches_1.png",
    },
    {
        name: "Torgeon Flumisence",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$73.99",
        color: "yellow",
        image: "./images/watches_2.png",
    },
    {
        name: "Citizen Eco-Drive",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$104.70",
        color: "white",
        image: "./images/watches_3.png",
    },
    {
        name: "Cartier Martel",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$63.60",
        color: "teal",
        image: "./images/watches_4.png",
    },
    {
        name: "Marvin Automatic",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$99.59",
        color: "red",
        image: "./images/watches_5.png",
    },
]

let femaleWatchArr = 
[
    {
        name: "Calvin Klien",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$143.36",
        color: "gold",
        image: "./images/Female-Watches/fem-watches-1.png",
    },
    {
        name: "Citizen Eco-Drive",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$123.12",
        color: "orange",
        image: "./images/Female-Watches/fem-watches-2.png",
    },
    {
        name: "AIG Aner",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$154.23",
        color: "black",
        image: "./images/Female-Watches/fem-watches-3.png",
    },
    {
        name: "Hamilton Luxurious",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$99.54",
        color: "white",
        image: "./images/Female-Watches/fem-watches-4.png",
    },
    {
        name: "Rolex Perpetual",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sint perspiciatis consectetur saepe obcaecati facilis vel, sunt veniam adipisci voluptate.",
        price: "$299.96",
        color: "red",
        image: "./images/Female-Watches/fem-watches-5.png",
    },
]

let watchName = document.querySelector("#watch-name");
let watchInfo = document.querySelector("#watch-info");
let watchPrice = document.querySelector("#watch-price");
let watchImage = document.querySelector("#watch-image");
let arrowBtn = document.querySelectorAll(".arrow");
let brandsBtn = document.querySelectorAll(".nav-link");
let currentWatch = 0;


window.addEventListener("DOMContentLoaded", function(){
    startWatches(maleWatchArr);
    arrowNextPrev(maleWatchArr);
    brandsClickActivate();
})

// startWatches(maleWatchArr);
function startWatches(arr){
    watchImage.src = arr[currentWatch].image;
    watchName.innerHTML = arr[currentWatch].name;
    watchInfo.innerHTML = arr[currentWatch].info;
    watchPrice.innerHTML = arr[currentWatch].price;
    watchName.style.color = arr[currentWatch].color;
    watchPrice.style.color = arr[currentWatch].color;
}


function arrowNextPrev(arr){
    arrowBtn.forEach(function(arrow){
        arrow.addEventListener("click", function(){
            if(arrow.classList.contains("fa-arrow-alt-circle-right")){
                currentWatch ++;
                if(currentWatch === arr.length){
                    currentWatch = 0;
                }
            } else {
                currentWatch --;
                if(currentWatch < 0){
                    currentWatch = (arr.length - 1);
                }
            }
            startWatches(arr);
        })
    }) 
}

function brandsClickActivate(){
    brandsBtn.forEach(function(brand){
        brand.addEventListener("click", function(){
            if(brand.classList.contains("male")){
                currentWatch = 0;
                startWatches(maleWatchArr);
                arrowNextPrev(maleWatchArr);
            } else {
                currentWatch = 0;
                startWatches(femaleWatchArr);
                arrowNextPrev(femaleWatchArr);
            }
        })
    })
}