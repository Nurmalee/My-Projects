const menuBar = document.querySelectorAll(".fa-bars");
const youtube = document.querySelector(".youtube-logo");
const bodyComponentNav = document.querySelector(".body-component-nav");
const videoFile = document.querySelectorAll(".video-file");
const video = document.querySelectorAll(".video");
const playIcon = document.querySelectorAll(".fa-play");
const modeBtn = document.querySelector(".mode-btn");
const moder = document.querySelector(".moder");
const pageBody = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-links");
const videoDuration = document.querySelectorAll(".duration");
const videoContent = document.querySelectorAll(".video-content");
const navLikeLeft2 = document.querySelector(".body-component-nav .navlike-left");

menuBar.forEach(function(menuBarItem){
    menuBarItem.addEventListener("click", function(){
        bodyComponentNav.classList.toggle("display-nav");
    })
})


navLinks.forEach(function(navLink){
    navLink.addEventListener("click", function(){
        for(let i = 0; i < navLinks.length; i++){
            navLinks[i].classList.remove("nav-link-active");
        }
        navLink.classList.add("nav-link-active");
    })
})


window.addEventListener("DOMContentLoaded", function(){
    bodyComponentNav.classList.add("display-nav");
    quickPlay();
    videoFile.forEach(function(videoItem){
        videoItem.addEventListener("loadedmetadata", function(){
            const duration = videoItem.duration;
            videoItem.nextElementSibling.innerHTML = formatTime(duration);
            
        })
    }) 
})


videoFile.forEach(function(videoItem){
    videoItem.addEventListener("mouseenter", function(){
        videoItem.play();
        videoItem.previousElementSibling.style.visibility = "hidden";
        videoItem.nextElementSibling.style.visibility = "hidden";
        videoItem.previousElementSibling.previousElementSibling.style.visibility = "visible";
        setTimeout(function(){
            videoItem.pause();
            videoItem.previousElementSibling.style.visibility = "visible";
            videoItem.nextElementSibling.style.visibility = "visible";
        }, 4000)
    })

    videoItem.addEventListener("mouseleave", function(){
        videoItem.pause();
        videoItem.nextElementSibling.style.visibility = "visible";
        videoItem.previousElementSibling.previousElementSibling.style.visibility = "hidden";
    })
})


modeBtn.addEventListener("click", function(){
    if(!moder.classList.contains("mode-toggle")){
        moder.classList.add("mode-toggle");
        moder.innerHTML = "Light";
        pageBody.classList.add("body");
        youtube.src = "images/youtube-light-mode-logo.PNG";
    } else {
        moder.classList.remove("mode-toggle");
        moder.innerHTML = "Dark";
        pageBody.classList.remove("body");
        youtube.src = "images/youtube-dark-mode-logo.PNG";
    }
})



function quickPlay(){
    videoFile.forEach(function(videoItem){
        videoItem.play();
        setTimeout(function(){
            videoItem.pause();
        }, 10000)
    })
}

function formatTime(time){
    let hours = Math.floor((time/ 60 / 60));
    let minutes = Math.floor((time % 3600)/60);
    let seconds = Math.floor(time % 60);

    let formattedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    if(hours <= 0){
        formattedTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    }

    return formattedTime;
}
