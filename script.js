// ================================
// GANESH WEB STUDIO
// Main JavaScript
// ================================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 80
});

// Scroll Progress Bar
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if(topBtn){

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}

// Smooth Navigation
document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});

// Navbar Background
const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(8,16,31,.95)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(15,23,42,.75)";

header.style.boxShadow="none";

}

});

// Counter Animation
const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));

// FAQ
document.querySelectorAll(".faq-question").forEach(item=>{

item.addEventListener("click",()=>{

const answer=item.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

document.querySelectorAll(".faq-answer").forEach(a=>{

a.style.display="none";

});

answer.style.display="block";

}

});

});

// Portfolio Filter
const filterButtons=document.querySelectorAll(".filter-btn");

const portfolioItems=document.querySelectorAll(".portfolio-card");

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

const value=btn.dataset.filter;

portfolioItems.forEach(card=>{

if(value==="all"){

card.style.display="block";

}else{

card.style.display=

card.classList.contains(value)

?"block":"none";

}

});

});

});

// Contact Form
const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your request has been received.");

form.reset();

});

}

// Copy UPI
function copyUPI(){

navigator.clipboard.writeText("ganeshbhangaragi5-1@okicici");

alert("UPI ID copied successfully!");

}

// Typing Effect
const typing=document.getElementById("typing");

if(typing){

const words=[

"Websites",

"SEO",

"Marketing",

"Growth"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function type(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,deleting?60:120);

}

type();

}

// Year
const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}
