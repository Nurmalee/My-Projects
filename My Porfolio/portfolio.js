const workArea = document.querySelector("#works-area");

let workArr = [
    {
        image: "works/My-Porsche-Garage-Landing-Page.jpg",
        h3: "My Porsche Garage",
        p: "A landing page for my futuristic garage of exortic porsche cars, open to explore",
    },
    {
        image: "works/Watches-Landing-Page.jpg",
        h3: "Watches HQ",
        p: "A landing page for stylistics watches for both male and female",
    },
    {
        image: "works/Doritos-UI.jpg",
        h3: "Doritos Snacks UI",
        p: "Ever seen a page made with bootstrap but doesn't look like it? This is a simple landing page or UI made for Doritos Snack. Animations made with GSAP javascript library",
    },
    {
        image: "works/Brisk-and-Sleek.jpg",
        h3: "Website for Brisk and Sleek Arch Ventures",
        p: "Though still a work in progress, this is a website for a startup Architectural website. Through javascript it will be built with interesting functionalities which includes a database of projects",
    },
    {
        image: "works/Form-Email-Validation-Example.jpg",
        h3: "Sample Form Email Validation",
        p: "A simple example of form validation possibilities. An extract from the BRISK AND SLEEK ARCH VENTURE website",
    },
    {
        image: "works/RGB-Color-Game.jpg",
        h3: "RGB Color Guessing Game",
        p: "A RGB Color Guessing game that when played consistently enhances your ability to visualize how colors look just from the color code. It has personally helped my color competencies",
    },
    {
        image: "works/Background-Color-Flipper.jpg",
        h3: "Background Color Flipper",
        p: "Just a background color flipping page to exhibit the unlimited and unending array of color possibilities", 
    },
    {
        image: "works/Background-Color-Helper.jpg",
        h3: "Background Color Chooser",
        p: "Created this page to ease my choice for background color in my project home pages. It contains a responsive Navbar plus the possibility to change the background color just as in the background color flipper",
    },
    {
        image: "works/Sidebar-Toggler.jpg",
        h3: "Sidebar Toggler",
        p: "A toggled side nav bar made with vanilla javascript",
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
               <a href="#" id="explore">explore</a>
           </div>
       </div>
    </div>`
    return returnableHTML;
    })
    workArrDisplay = workArrDisplay.join("");
    // workArea.innerHTML = workArrDisplay;
}


