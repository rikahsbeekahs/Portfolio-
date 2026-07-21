// ==========================
// Typing Animation
// ==========================

const roles = [
  "AI & Data Science Student",
  "Computer Science Engineer",
  "Prompt Engineer",
  "AI Developer",
  "Tech for Good Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = roles[roleIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex);

        charIndex++;

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex>=roles.length){

                roleIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?45:90);

}

typeEffect();


// ==========================
// Dark Mode
// ==========================

const themeButton=document.querySelector(".theme-btn");

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("light");

const icon=themeButton.querySelector("i");

if(document.body.classList.contains("light")){

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

}else{

icon.classList.remove("fa-sun");

icon.classList.add("fa-moon");

}

});


// ==========================
// Scroll Reveal
// ==========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// ==========================
// Navbar Active Link
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================
// Smooth Scroll
// ==========================

navLinks.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

window.scrollTo({

top:target.offsetTop-70,

behavior:"smooth"

});

});

});


// ==========================
// Hero Fade
// ==========================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.opacity=1-window.scrollY/700;

});


// ==========================
// Mouse Glow
// ==========================

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty(
"--mouseX",
e.clientX+"px"
);

document.documentElement.style.setProperty(
"--mouseY",
e.clientY+"px"
);

});


// ==========================
// Back To Top Button
// ==========================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.opacity="1";

topButton.style.pointerEvents="all";

}

else{

topButton.style.opacity="0";

topButton.style.pointerEvents="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
