 AOS.init();
 var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
var header=document.getElementById("header");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
      header.classList.add("active")
    }else{
         header.classList.remove("active")
    }
})
// toggle navbar
let nav=document.getElementById("nav");
let menu=document.getElementById("menu");

menu.addEventListener("click",()=>{
  nav.classList.toggle("activenavbar")
})
// typed.js
var typed = new Typed('#element', {
  strings: ['Web Developer', 'Web Designer'],
  typeSpeed: 50,
});