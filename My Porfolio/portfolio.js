const workArea = document.querySelector("#works-area");

let workArr = [
    {
        image: "works/My-Porsche-Garage-Landing-Page.jpg",
        h3: "My Porsche Garage",
        p: "A landing page for my futuristic garage of exortic porsche cars, open to explore",
        link: "https://nurmalee.github.io/My-Projects/MY PORSCHE GARAGE/garage.html",
    },
    {
        image: "works/Watches-Landing-Page.jpg",
        h3: "Watches HQ",
        p: "A landing page for stylistics watches for both male and female",
        link: "https://nurmalee.github.io/My-Projects/WATCHES HQ/watches.html",
    },
    {
        image: "works/Doritos-UI.jpg",
        h3: "Doritos Snacks UI",
        p: "Ever seen a page made with bootstrap but doesn't look like it? This is a simple landing page or UI made for Doritos Snack. Animations made with GSAP javascript library",
        link: "https://nurmalee.github.io/My-Projects/DORITOS UI/doritos.html",
    },
    {
        image: "works/Brisk-and-Sleek.jpg",
        h3: "Brisk & Sleek Arch Ventures",
        p: "Website for Brisk and Sleek Arch ventures. Though still a work in progress, this website serves as a portfolio for exhibition of projects",
        link: "#"
    },
    {
        image: "works/RGB-Color-Game.jpg",
        h3: "RGB Color Guessing Game",
        p: "A RGB Color Guessing game that when played consistently enhances your ability to visualize how colors look just from the color code. It has personally helped my color competencies",
        link: "https://nurmalee.github.io/My-Projects/RGB Color Game/color.html",
    },
    {
        image: "works/Background-Color-Flipper.jpg",
        h3: "Background Color Flipper",
        p: "Just a background color flipping page to exhibit the unlimited and unending array of color possibilities",
        link: "https://nurmalee.github.io/My-Projects/Background Color Flipper/index.html",
    },
]


window.addEventListener("DOMContentLoaded", function(){
    portfolioWorks();
})

function portfolioWorks(){
    let workArrDisplay = workArr.map(function(workArrItem){
        returnableHTML = 
    `<div class="work">
       <div id="work-display-image" style="background-image: url(${workArrItem.image})"></div>
       <div class="work-info">
           <h3>${workArrItem.h3}</h3>
           <p>${workArrItem.p}</p>
           <div class="icons-and-explore">
               <div id="languages">
                   <i class="fab fa-html5"></i>
                   <i class="fab fa-css3-alt"></i>
                   <i class="fab fa-js"></i>
               </div>
               <a href= "${workArrItem.link}" id="explore">explore</a>
           </div>
       </div>
    </div>`
    return returnableHTML;
    })
    workArrDisplay = workArrDisplay.join("");
    workArea.innerHTML = workArrDisplay;
}


