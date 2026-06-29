/*====================================
      FREEFIREXIPL
      SCHEDULE PAGE
=====================================*/

lucide.createIcons();

/*=========================
    SCROLL REVEAL
=========================*/

const revealItems = document.querySelectorAll(
".live-card,.schedule-card,.timeline-item,.completed-card,.notify-card,.download-card"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

revealItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".7s ease";

    observer.observe(item);

});

/*=========================
      BUTTON RIPPLE
=========================*/

document.querySelectorAll(".notify-btn,.download-btn").forEach(btn=>{

    btn.addEventListener("click",function(e){

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
        circle.style.left=(e.offsetX-diameter/2)+"px";
        circle.style.top=(e.offsetY-diameter/2)+"px";
        circle.style.transform="scale(0)";
        circle.style.animation="ripple .6s linear";

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});

/*=========================
     LIVE BADGE PULSE
=========================*/

const liveBadge=document.querySelector(".live-badge");

if(liveBadge){

    setInterval(()=>{

        liveBadge.classList.toggle("pulse");

    },800);

}