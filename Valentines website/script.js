// 🔐 PASSWORD
const PASSWORD = "1023"; 

const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const passwordScreen = document.getElementById("passwordScreen");
const mainContent = document.getElementById("mainContent");


unlockBtn.onclick = () => {
    bgMusic.pause();
bgMusic.currentTime = 0;

if(passwordInput.value === PASSWORD){
passwordScreen.style.display = "none";
mainContent.classList.remove("hidden");
startExperience();
}else{
alert("Wrong password 😜");
}
};




// START EVERYTHING
function startExperience(){
typeLetter();
updateCountdown();
setInterval(updateCountdown,1000);
}




// ❤️ TYPEWRITER
const letter = "As Valentine's Day approached hmmm.. ahmmmmm yahhhh..";
let i=0;


function typeLetter(){
const el=document.getElementById("typedLetter");


if(i<letter.length){
el.textContent+=letter.charAt(i);
i++;
setTimeout(typeLetter,35);
}
}




// ⏳ COUNTDOWN
function updateCountdown(){
const el=document.getElementById("countdown");
const val=new Date("February 14, 2026 00:00:00");
const now=new Date();
const diff=val-now;


if(diff<=0){
el.textContent="Happy Valentine's Day! 💘";
return;
}


const d=Math.floor(diff/86400000);
const h=Math.floor(diff/3600000)%24;
const m=Math.floor(diff/60000)%60;
const s=Math.floor(diff/1000)%60;


el.textContent=`${d}d ${h}h ${m}m ${s}s until Valentine's 💕`;
}




// BUTTONS
const loveGif = document.getElementById("loveGif");

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const message=document.getElementById("message");
const music=document.getElementById("bgMusic");


// runaway NO 😆
noBtn.addEventListener("mouseover",()=>{
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
});




// YES CLICK 💖
yesBtn.onclick=()=>{
    // SHOW GIF
loveGif.classList.add("show");

// HIDE AFTER 1 MINUTE
setTimeout(() => {
    loveGif.classList.remove("show");
}, 60000); // 60000ms = 1 minute


document.querySelector(".countdown").style.display = "block";


// 📳 VIBRATION
if(navigator.vibrate){
navigator.vibrate([200,100,400]);
}


message.classList.remove("hidden");
music.play();
confetti();
loveFireworks();
};




// 🎉 CONFETTI
function confetti(){
for(let i=0;i<120;i++){
const c=document.createElement("div");
c.className="confetti";
c.style.left=Math.random()*100+"vw";
c.style.background=`hsl(${Math.random()*360},100%,70%)`;
document.body.appendChild(c);
setTimeout(()=>c.remove(),3000);
}
}




// 🎆 I LOVE YOU FIREWORKS
function loveFireworks(){


const text=document.createElement("div");
text.innerText="SEE YOU ON  FEB 14, LOVE! I LOVEYOU! ";


text.style.position="absolute";
text.style.top="50%";
text.style.left="50%";
text.style.transform="translate(-50%,-50%)";
text.style.fontSize="clamp(40px,8vw,90px)";
text.style.fontWeight="bold";
text.style.color="white";
text.style.textShadow="0 0 20px pink,0 0 40px hotpink";


document.body.appendChild(text);


setTimeout(()=>text.remove(),4000);
}