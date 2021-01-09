const navToggleBtn = document.querySelector(".nav-toggle-btn");
const listContainer = document.querySelector(".list-container");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const year = document.querySelector("#year");
const navbar = document.querySelector(".navbar");
const exploreBtn = document.querySelector("#explore-btn");
const ratings = document.querySelectorAll(".a-rating")
const scrollTopBtn = document.querySelector(".scroll-to-top");



/******* THIS AUTOMATICALLY UPDATES THE YEAR IN THE FOOTER EVERY NEW YEAR *******/
year.innerHTML = new Date().getFullYear();

/******* THIS TAKES CARE OF NAVLIST AND LISTCONTAINER HEIGHT CONTROL ON TOGGLE  *******/
navToggleBtn.addEventListener("click", function(){
    // listContainer.classList.toggle("show-links");
    const listContainerHeight = listContainer.getBoundingClientRect().height;
    const navListHeight = navList.getBoundingClientRect().height;
    if(listContainerHeight === 0){
        listContainer.style.height = `${navListHeight}px`;
        this.classList.add("nav-toggle-btn-bg");
    } else {
        listContainer.style.height = 0;
        this.classList.remove("nav-toggle-btn-bg");
    }
})

/***** CONTROLS THE ANIMATION OF THE EXPLORE BUTTON IN THE HEADER******/
setInterval(function(){
    exploreBtn.classList.toggle("explore-btn");
    scrollTopBtn.classList.toggle("scroll-to-top-animation");
}, 1000)

/****** PREVENTS THE DEFAULT ACTION OF THE ANCHOR TAGS REPRESENTING THE RATINGS *******/
ratingPreventDefault();
function ratingPreventDefault(){
    ratings.forEach(function(rating){
        rating.addEventListener("click", function(e){
            e.preventDefault();
        })
    })
}

/******* THIS ADDS A CLASS .FIXED-NAV TO NAVBAR ON SCROLL *******/
window.addEventListener("scroll", function(){
    // listContainerHeight = listContainer.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    const navListHeight = navList.getBoundingClientRect().height;
    if(scrollHeight > navListHeight){
        document.querySelector(".navbar").classList.add("fixed-nav");
    } else {
        document.querySelector(".navbar").classList.remove("fixed-nav");
    }
    if(scrollHeight > ((document.querySelector("body").getBoundingClientRect().height)/2)){
        scrollTopBtn.classList.add("scroll-to-top-visibility");
    } else {
        scrollTopBtn.classList.remove("scroll-to-top-visibility");
    }
})


/******* THIS HIDES THE NAVLIST WHEN NAVLINK IS CLICKED *******/
navLinks.forEach(function(link){
    link.addEventListener("click", function(e){

        //removes height from listContainer(navlinks ul) and nav-toggle-btn-bg from navToggleBtn
        listContainer.style.height = 0;
        navToggleBtn.classList.remove("nav-toggle-btn-bg");

        // prevents default CSS scroll to href target
        e.preventDefault();
        // gets section ID via links click; 
        id = e.currentTarget.getAttribute("href").slice(1);
        const listContainerHeight = listContainer.getBoundingClientRect().height;
        const navListHeight = navList.getBoundingClientRect().height;

        // selects section via the ID on clicked link based on current target
        const section = document.getElementById(id);
        let position = section.offsetTop - navListHeight;

        if(!navbar.classList.contains("fixed-nav")){
            position = position - navListHeight;
        } else {
            position = position - navListHeight;
        }

        if(navListHeight > 90) {
            position = position + 195;
        }

        window.scrollTo({
            left: 0,
            top: position,  
        })
    })
})

/******* THIS ARRAY DYNAMICALLY DISPLAYS THE CONTENT OF .PORTFOLIO-WORKS *******/
portfolioArr = 
[
    {
        img: "./images/works/Product-Pricing-Page.JPG",
        pageName: "Product Pricing Page",
        exploreLink: "https://nurmalee.github.io/My-Projects/product_pricing/html/products.html",
    },
    {
        img: "./images/works/Youtube-VanillaJs-Clone.JPG",
        pageName: "The Youtube Clone (Under Construction)",
        exploreLink: "https://nurmalee.github.io/My-Projects/youtube_clone/index.html",
    },
   
    {
        img: "./images/works/Pepsi-Landing-Page.JPG",
        pageName: "Pepsi Landing Page",
        exploreLink: "https://nurmalee.github.io/My-Projects/pepsi_landing_page/pepsi.html",
    },
    {
        img: "./images/works/Tabs-Project.JPG",
        pageName: "Tabs project",
        exploreLink: "https://nurmalee.github.io/My-Projects/tabs_project/tabs.html",
    },
    {
        img: "./images/works/Watches-Landing-Page.JPG",
        pageName: "Watches HQ Landing Page",
        exploreLink: "https://nurmalee.github.io/My-Projects/watches_hq/watches.html",
    },
    {
        img: "./images/works/Doritos-UI.JPG",
        pageName: "Doritos Landing Page",
        exploreLink: "https://nurmalee.github.io/My-Projects/doritos_ui/doritos.html",
    },
    {
        img: "./images/works/My-Porsche-Garage-Landing-Page.JPG",
        pageName: "My Porsche Garage",
        exploreLink: "https://nurmalee.github.io/My-Projects/my_porsche_garage/garage.html",
    },
    {
        img: "./images/works/RGB-Color-Game.JPG",
        pageName: "RGB COlor Guessing Game",
        exploreLink: "https://nurmalee.github.io/My-Projects/RGB_color_game/color.html",
    },
    {
        img: "./images/works/Brisk-and-Sleek.JPG",
        pageName: "Brisk and Sleek arch ventures (Under Construction)",
        exploreLink: "#",
    }
   
    // {
    //     img: "images/works/Watches-Landing-Page.JPG",
    //     pageName: "Watches HQ Landing Page",
    //     exploreLink: "https://nurmalee.github.io/My-Projects/MY PORSCHE GARAGE/garage.html",
    // }
]

const portfolioWorks = document.querySelector(".portfolio-works");

makeWorksHtmlContent();
function makeWorksHtmlContent(){
    let displayPortfolio = portfolioArr.map(function(item){
        return `<div class="work">
                    <div id="work-display-image"><img src="${item.img}" alt="">
                        <a href="${item.exploreLink}" id="explore">explore</a>
                    </div>
                    <div class="work-info">
                        <h3>${item.pageName}</h3>
                        <div class="icons-and-explore">
                            <div id="languages">
                                <i class="fab fa-html5"></i>
                                <i class="fab fa-css3-alt"></i>
                                <i class="fab fa-js"></i>
                            </div>
                        </div>
                    </div>
                </div>`;
    })
    displayPortfolio = displayPortfolio.join("");
    portfolioWorks.innerHTML = displayPortfolio;

    /***** SELECT CREATED WORK TABS AND ADD ANIMATION EFFECTS *****/
    const workTab = document.querySelectorAll(".work");
    workTab.forEach(function(worktabItem){
        worktabItem.addEventListener("mouseover", function(e){
            const element = e.currentTarget;
            console.log(element);
            if(!(element.classList.contains("work-tab-animation"))){
                element.classList.add("work-tab-animation");
            } else {
                element.classList.remove("work-tab-animation");
            }
            
        })
    })
}
