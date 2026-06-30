/*=========================================
        FREEFIREXIPL TOURNAMENT JS
==========================================*/

/*------------------------------
    LUCIDE ICONS
------------------------------*/

lucide.createIcons();

/*------------------------------
    COUNTDOWN
------------------------------*/

// Change this to your tournament date
const targetDate = new Date("2026-08-08T15:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        days.textContent="00";
        hours.textContent="00";
        minutes.textContent="00";
        seconds.textContent="00";

        return;

    }

    const d = Math.floor(distance/(1000*60*60*24));
    const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((distance%(1000*60*60))/(1000*60));
    const s = Math.floor((distance%(1000*60))/1000);

    days.textContent = String(d).padStart(2,"0");
    hours.textContent = String(h).padStart(2,"0");
    minutes.textContent = String(m).padStart(2,"0");
    seconds.textContent = String(s).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/*------------------------------
    SCROLL REVEAL
------------------------------*/

const revealItems = document.querySelectorAll(
".featured-card,.count-box,.prize-card,.info-card div,.rule-item,.cta-card"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

revealItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(35px)";
    item.style.transition=".7s ease";

    observer.observe(item);

});

/*------------------------------
    BUTTON RIPPLE
------------------------------*/

document.querySelectorAll(".join-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width=diameter+"px";
        circle.style.height=diameter+"px";

        circle.style.position="absolute";
        circle.style.borderRadius="50%";
        circle.style.background="rgba(255,255,255,.35)";
        circle.style.transform="scale(0)";
        circle.style.left=(e.offsetX-diameter/2)+"px";
        circle.style.top=(e.offsetY-diameter/2)+"px";
        circle.style.animation="ripple .6s linear";

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});