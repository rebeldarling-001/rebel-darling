/*=========================================
        FREEFIREXIPL
          POINTS TABLE
=========================================*/

lucide.createIcons();

/*=========================================
        SCROLL REVEAL
=========================================*/

const rows=document.querySelectorAll(".team-row");

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

rows.forEach(row=>{

    row.style.opacity="0";
    row.style.transform="translateY(35px)";
    row.style.transition=".7s ease";

    observer.observe(row);

});

/*=========================================
        TOUCH EFFECT
=========================================*/

rows.forEach(row=>{

    row.addEventListener("touchstart",()=>{

        row.style.transform="scale(.98)";

    });

    row.addEventListener("touchend",()=>{

        row.style.transform="scale(1)";

    });

});

/*=========================================
        HOVER EFFECT
=========================================*/

rows.forEach(row=>{

    row.addEventListener("mouseenter",()=>{

        row.style.boxShadow="0 15px 40px rgba(255,140,0,.18)";

    });

    row.addEventListener("mouseleave",()=>{

        row.style.boxShadow="";

    });

});

/*=========================================
        ACTIVE NAVIGATION
=========================================*/

document.querySelectorAll(".nav-item").forEach(item=>{

    item.addEventListener("click",()=>{

        document.querySelectorAll(".nav-item")
        .forEach(nav=>nav.classList.remove("active"));

        item.classList.add("active");

    });

});
const teams=[

{pos:1,team:"SRH",p:0,w:0,l:0,pts:0,nrr:"0.000"},

{pos:2,team:"CSK",p:0,w:0,l:0,pts:0,nrr:"0.000"},

{pos:3,team:"RR",p:0,w:0,l:0,pts:0,nrr:"0.000"},

{pos:4,team:"MI",p:0,w:0,l:0,pts:0,nrr:"0.000"},

{pos:5,team:"RCB",p:0,w:0,l:0,pts:0,nrr:"0.000"},

{pos:6,team:"KKR",p:0,w:0,l:0,pts:0,nrr:"0.000"},

{pos:7,team:"PBKS",p:0,w:0,l:0,pts:0,nrr:"0.000"},

{pos:8,team:"DC",p:0,w:0,l:0,pts:0,nrr:"0.000"}

];

const body=document.getElementById("pointsBody");

teams.forEach(team=>{

let cls="";

if(team.pos===1) cls="first";
else if(team.pos===2) cls="second";
else if(team.pos===3) cls="third";

body.innerHTML+=`

<tr class="${cls}">

<td>${team.pos}</td>

<td>${team.team}</td>

<td>${team.p}</td>

<td>${team.w}</td>

<td>${team.l}</td>

<td>${team.pts}</td>

<td>${team.nrr}</td>

</tr>

`;

});

lucide.createIcons();