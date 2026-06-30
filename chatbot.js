/*=========================================
        FFXIPL AI ASSISTANT
=========================================*/

lucide.createIcons();

/*=========================================
        ELEMENTS
=========================================*/

const chatToggle=document.getElementById("chatToggle");

const chatWindow=document.getElementById("chatWindow");

const closeChat=document.getElementById("closeChat");

const sendBtn=document.getElementById("sendBtn");

const chatInput=document.getElementById("chatInput");

const chatMessages=document.getElementById("chatMessages");

/*=========================================
        OPEN & CLOSE
=========================================*/

chatToggle.addEventListener("click",()=>{

chatWindow.style.display="flex";

chatToggle.style.display="none";

});

closeChat.addEventListener("click",()=>{

chatWindow.style.display="none";

chatToggle.style.display="flex";

});

/*=========================================
        SEND MESSAGE
=========================================*/

function addUserMessage(message){

const div=document.createElement("div");

div.className="user-message";

div.innerHTML=message;

chatMessages.appendChild(div);

chatMessages.scrollTop=chatMessages.scrollHeight;

}

function addBotMessage(message){

const div=document.createElement("div");

div.className="bot-message";

div.innerHTML=message;

chatMessages.appendChild(div);

chatMessages.scrollTop=chatMessages.scrollHeight;

}
/*=========================================
        AI REPLIES
=========================================*/

function getReply(message){

message=message.toLowerCase();

if(message.includes("hi") ||
message.includes("hello") ||
message.includes("hey")){

return "👋 Hello Champion! Welcome to FREEFIREXIPL. How can I help you today?";

}

if(message.includes("register")){

return "📝 Registration opens before every tournament. Keep an eye on our Announcements page and Instagram (@freefirexipl.2k26) for updates.";

}

if(message.includes("schedule")){

return "📅 You can view all upcoming matches and fixtures on the Schedule page.";

}

if(message.includes("prize")){

return "🏆 Prize pool details are announced separately for each tournament. Check the Tournament page for the latest information.";

}

if(message.includes("team")){

return "👥 Visit the Teams page to explore all participating teams and their complete squads.";

}

if(message.includes("player")){

return "🎮 Visit the Players page to view all registered players and their profiles.";

}

if(message.includes("auction")){

return "💰 The Auction Center displays all auction results, player prices and team purchases.";

}

if(message.includes("champion") ||
message.includes("winner")){

return "👑 Visit the Hall of Champions to see every season winner of FREEFIREXIPL.";

}

if(message.includes("contact")){

return "📞 You can contact us anytime through the Contact page or Instagram @freefirexipl.2k26.";

}

if(message.includes("rule")){

return "📜 Tournament rules will be available on the Rules page before every event.";

}

return "🤖 Sorry, I couldn't understand that. Try asking about Registration, Schedule, Teams, Players, Auction, Champions, Prize Pool or Contact.";

}

/*=========================================
        SEND FUNCTION
=========================================*/

function sendMessage(){

const message=chatInput.value.trim();

if(message==="") return;

addUserMessage(message);

chatInput.value="";

const typing=document.createElement("div");

typing.className="typing";

typing.innerHTML="<span></span><span></span><span></span>";

chatMessages.appendChild(typing);

chatMessages.scrollTop=chatMessages.scrollHeight;

setTimeout(()=>{

typing.remove();

addBotMessage(getReply(message));

},1000);

}

sendBtn.addEventListener("click",sendMessage);

chatInput.addEventListener("keypress",e=>{

if(e.key==="Enter"){

sendMessage();

}

});
/*=========================================
        QUICK ACTION BUTTONS
=========================================*/

document.querySelectorAll(".quick-btn").forEach(button=>{

button.addEventListener("click",()=>{

const text=button.innerText;

addUserMessage(text);

const typing=document.createElement("div");

typing.className="typing";

typing.innerHTML="<span></span><span></span><span></span>";

chatMessages.appendChild(typing);

chatMessages.scrollTop=chatMessages.scrollHeight;

setTimeout(()=>{

typing.remove();

addBotMessage(getReply(text));

},800);

});

});

/*=========================================
        AUTO WELCOME
=========================================*/

setTimeout(()=>{

const welcome=document.createElement("div");

welcome.className="bot-message";

welcome.innerHTML="🔥 Tip: Try asking me about <b>Schedule</b>, <b>Registration</b>, <b>Auction</b> or <b>Hall of Champions</b>.";

chatMessages.appendChild(welcome);

chatMessages.scrollTop=chatMessages.scrollHeight;

},3000);

/*=========================================
        AUTO SCROLL
=========================================*/

const observer=new MutationObserver(()=>{

chatMessages.scrollTop=chatMessages.scrollHeight;

});

observer.observe(chatMessages,{

childList:true

});

/*=========================================
        READY
=========================================*/

console.log("FFXIPL AI Assistant Loaded Successfully");