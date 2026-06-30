/*=========================================
        FREEFIREXIPL V2
            TEAMS PAGE
==========================================*/

lucide.createIcons();

/*=========================================
        SEARCH TEAMS
==========================================*/

const searchInput = document.querySelector(".team-search");
const teamCards = document.querySelectorAll(".team-card");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        const value = this.value.toLowerCase();

        teamCards.forEach(card=>{

            const text = card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}

/*=========================================
        SCROLL REVEAL
==========================================*/

const revealItems = document.querySelectorAll(

".featured-card,.team-card"

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

/*=========================================
        RIPPLE EFFECT
==========================================*/

document.querySelectorAll(".team-btn").forEach(btn=>{

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

/*=========================================
        TEAM CARD EFFECT
==========================================*/

teamCards.forEach(card=>{

    card.addEventListener("touchstart",()=>{

        card.style.transform="scale(.98)";

    });

    card.addEventListener("touchend",()=>{

        card.style.transform="scale(1)";

    });

});