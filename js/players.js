/*=========================================
        FREEFIREXIPL V2
          PLAYERS PAGE
==========================================*/

lucide.createIcons();

/*=========================================
          LIVE SEARCH
==========================================*/

const searchInput=document.querySelector(".player-search");

const playerCards=document.querySelectorAll(".player-card");

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        const value=this.value.toLowerCase();

        playerCards.forEach(card=>{

            const text=card.innerText.toLowerCase();

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

const revealItems=document.querySelectorAll(

".player-card"

);

const observer=new IntersectionObserver((entries)=>{

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

document.querySelectorAll(".player-btn").forEach(btn=>{

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
      TOUCH CARD EFFECT
==========================================*/

playerCards.forEach(card=>{

    card.addEventListener("touchstart",()=>{

        card.style.transform="scale(.98)";

    });

    card.addEventListener("touchend",()=>{

        card.style.transform="scale(1)";

    });

});
