/*=========================================
        FREEFIREXIPL
        MATCH RESULTS
=========================================*/

lucide.createIcons();

/*=========================================
        SCROLL REVEAL
=========================================*/

const cards=document.querySelectorAll(".match-card");

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

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".7s ease";

    observer.observe(card);

});

/*=========================================
        TOUCH EFFECT
=========================================*/

cards.forEach(card=>{

    card.addEventListener("touchstart",()=>{

        card.style.transform="scale(.98)";

    });

    card.addEventListener("touchend",()=>{

        card.style.transform="scale(1)";

    });

});

/*=========================================
        BUTTON EFFECT
=========================================*/

document.querySelectorAll(".result-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(.97)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },150);

    });

});

/*=========================================
        HOVER GLOW
=========================================*/

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 20px 45px rgba(255,140,0,.20)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});