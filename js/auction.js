/*=========================================
        FREEFIREXIPL
        AUCTION CENTER
=========================================*/

lucide.createIcons();

/*=========================================
        SEARCH
=========================================*/

const search=document.getElementById("playerSearch");

const players=document.querySelectorAll(".auction-player");

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

players.forEach(player=>{

const text=player.innerText.toLowerCase();

player.style.display=text.includes(value) ? "flex" : "none";

});

});

/*=========================================
        CLICK EFFECT
=========================================*/

players.forEach(player=>{

player.addEventListener("click",()=>{

players.forEach(p=>p.classList.remove("active"));

player.classList.add("active");

const name=player.querySelector("h3").innerText;

const price=player.querySelector("h2").innerText;

const team=player.querySelector(".player-right p").innerText;

const avatar=player.querySelector(".player-avatar").innerText;

document.querySelector(".details-avatar").innerText=avatar;

document.querySelector(".details-header h2").innerText=name;

document.querySelector(".details-header p").innerText="Selected Player";

const details=document.querySelectorAll(".detail-box h3");

details[0].innerText="₹50";
details[1].innerText=price;
details[2].innerText=team;
details[3].innerText=team;
details[4].innerText="SOLD";
details[5].innerText="1";

});

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

players.forEach(player=>{

player.style.opacity="0";

player.style.transform="translateY(30px)";

player.style.transition=".6s ease";

observer.observe(player);

});

/*=========================================
        TOUCH EFFECT
=========================================*/

players.forEach(player=>{

player.addEventListener("touchstart",()=>{

player.style.transform="scale(.98)";

});

player.addEventListener("touchend",()=>{

player.style.transform="scale(1)";

});

});