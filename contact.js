/*=========================================
        FREEFIREXIPL
          CONTACT
=========================================*/

lucide.createIcons();

/*=========================================
        CONTACT FORM
=========================================*/

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const button=form.querySelector(".send-btn");

button.innerHTML='<i data-lucide="loader-2"></i> Sending...';

lucide.createIcons();

button.disabled=true;

setTimeout(()=>{

button.innerHTML='<i data-lucide="check-circle"></i> Message Sent';

lucide.createIcons();

setTimeout(()=>{

form.reset();

button.innerHTML='<i data-lucide="send"></i> Send Message';

button.disabled=false;

lucide.createIcons();

},2000);

},1500);

});

}

/*=========================================
        CARD HOVER EFFECT
=========================================*/

const cards=document.querySelectorAll(".contact-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-6px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

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

},{
threshold:.15
});

document.querySelectorAll(".contact-card,.contact-form").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(30px)";

item.style.transition=".7s ease";

observer.observe(item);

});