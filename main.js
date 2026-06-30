// Tournament Countdown

const targetDate = new Date("June 30, 2026 16:40:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

},1000);


/* Spotlight Auto Slider */

const track = document.querySelector(".spotlight-track");

if(track){

    const slides = document.querySelectorAll(".spotlight-slide");

    let current = 0;

    setInterval(()=>{

        current++;

        if(current >= slides.length){

            current = 0;

        }

        track.style.transform =
        `translateX(-${current*100}%)`;

    },5000);

}
/*=================================
      SCROLL REVEAL
=================================*/

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/*=============================
    PAGE TRANSITION
=============================*/

const transition =
document.querySelector(".page-transition");

document.querySelectorAll("a").forEach(link=>{

    const href=link.getAttribute("href");

    if(href && href!=="#" && !href.startsWith("http")){

        link.addEventListener("click",(e)=>{

           

            transition.classList.add("active");

            setTimeout(()=>{

                window.location=href;

            },450);

        });

    }

});

/*====================================
      FREEFIREXIPL MENU V3
=====================================*/

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenu = document.querySelector(".close-menu");

function openMenu(){

    mobileMenu.classList.add("active");
    menuBtn.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow="hidden";

}

function hideMenu(){

    mobileMenu.classList.remove("active");
    menuBtn.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow="";

}

menuBtn.addEventListener("click",openMenu);

closeMenu.addEventListener("click",hideMenu);

menuOverlay.addEventListener("click",hideMenu);
lucide.createIcons();