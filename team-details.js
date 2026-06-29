/*=========================================
        TEAM DETAILS
==========================================*/

lucide.createIcons();

/*=========================================
        TEAM DATABASE
==========================================*/

const teams={

RR:{
name:"Rajasthan Royals",
short:"RR",
owner:"Pavan Gamer",
bid:"₹100"
},

RCB:{
name:"Royal Challengers Bangalore",
short:"RCB",
owner:"Naresh",
bid:"₹90"
},

MI:{
name:"Mumbai Indians",
short:"MI",
owner:"Harsha",
bid:"₹95"
},

CSK:{
name:"Chennai Super Kings",
short:"CSK",
owner:"Abhi",
bid:"₹250"
},

SRH:{
name:"Sunrisers Hyderabad",
short:"SRH",
owner:"Bala",
bid:"₹300"
},

KKR:{
name:"Kolkata Knight Riders",
short:"KKR",
owner:"Venu",
bid:"₹50"
},

PBKS:{
name:"Punjab Kings",
short:"PBKS",
owner:"Loki",
bid:"₹50"
},

DC:{
name:"Delhi Capitals",
short:"DC",
owner:"Rafna",
bid:"₹20"
}

};

/*=========================================
        GET TEAM
==========================================*/

const params=new URLSearchParams(window.location.search);

const team=params.get("team")||"RR";

const currentTeam=teams[team];
/*=========================================
        LOAD TEAM DATA
==========================================*/

if(currentTeam){

    document.title=currentTeam.name+" | FREEFIREXIPL";

    const logo=document.querySelector(".team-logo-large");

    if(logo){

        logo.textContent=currentTeam.short;

    }

    const teamName=document.querySelector(".team-banner h1");

    if(teamName){

        teamName.textContent=currentTeam.name;

    }

    const owner=document.querySelector(".team-banner p");

    if(owner){

        owner.textContent="Owner : "+currentTeam.owner;

    }

    const bid=document.querySelector(".team-bid");

    if(bid){

        bid.textContent="Won in Auction • "+currentTeam.bid;

    }

    const statCards=document.querySelectorAll(".stat-card h2");

    if(statCards.length>=4){

        statCards[0].textContent="18";
        statCards[1].textContent="0";
        statCards[2].textContent=currentTeam.bid;
        statCards[3].textContent="S11";

    }

    const achievementItems=document.querySelectorAll(".achievement-item p");

    if(achievementItems.length>=4){

        achievementItems[0].textContent=currentTeam.owner;
        achievementItems[1].textContent=currentTeam.bid;
        achievementItems[2].textContent="Season 11";
        achievementItems[3].textContent="Active";

    }

}

/*=========================================
        SCROLL REVEAL
==========================================*/

const revealItems=document.querySelectorAll(

".stat-card,.player-mini-card,.achievement-card"

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

document.querySelectorAll(".mini-btn").forEach(btn=>{

    btn.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(this.clientWidth,this.clientHeight);

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

const squads={

RR:[
{name:"Player 1",role:"Captain"},
{name:"Player 2",role:"Fragger"},
{name:"Player 3",role:"Support"},
{name:"Player 4",role:"Sniper"}
],

RCB:[{name:"Player 1",role:"Captain"},
{name:"Player 2",role:"Fragger"},
{name:"Player 3",role:"Support"},
{name:"Player 4",role:"Sniper"}
],

MI:[{name:"Player 1",role:"Captain"},
{name:"Player 2",role:"Fragger"},
{name:"Player 3",role:"Support"},
{name:"Player 4",role:"Sniper"}
],

CSK:[{name:"Player 1",role:"Captain"},
{name:"Player 2",role:"Fragger"},
{name:"Player 3",role:"Support"},
{name:"Player 4",role:"Sniper"}
],

SRH:[{name:"Player 1",role:"Captain"},
{name:"Player 2",role:"Fragger"},
{name:"Player 3",role:"Support"},
{name:"Player 4",role:"Sniper"}
],

KKR:[{name:"Player 1",role:"Captain"},
{name:"Player 2",role:"Fragger"},
{name:"Player 3",role:"Support"},
{name:"Player 4",role:"Sniper"}
],

PBKS:[{name:"Player 1",role:"Captain"},
{name:"Player 2",role:"Fragger"},
{name:"Player 3",role:"Support"},
{name:"Player 4",role:"Sniper"}
],

DC:[{name:"Player 1",role:"Captain"},
{name:"Player 2",role:"Fragger"},
{name:"Player 3",role:"Support"},
{name:"Player 4",role:"Sniper"}
]

};

const squadGrid=document.getElementById("squadGrid");

if(squadGrid && squads[team]){

    squadGrid.innerHTML="";

    squads[team].forEach(player=>{

        squadGrid.innerHTML+=`

<div class="player-mini-card">

<div class="player-mini-avatar">

👤

</div>

<h3>${player.name}</h3>

<p>${player.role}</p>

<a href="player-details.html" class="mini-btn">

View Profile

</a>

</div>

`;

    });

}