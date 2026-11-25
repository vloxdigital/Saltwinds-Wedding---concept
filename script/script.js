const navbtn = document.querySelector(".nav-btn");
const navscreen = document.querySelector(".nav-screen");
const body = document.body;

navbtn.addEventListener("click", () => {
     navscreen.classList.toggle("show");
     navbtn.classList.toggle("cross");
     body.classList.toggle("off-scroll");
})

const header = document.querySelector(".header");
let hideTimer;

body.addEventListener("mousemove", () => {
     clearTimeout(hideTimer);
     header.classList.add("appear");
     if (header.matches(":hover")) {
          return
     }

     hideTimer = setTimeout(() => {
          header.classList.remove("appear");
     }, 2000);

})

window.addEventListener("scroll", () => {
     clearTimeout(hideTimer);
     header.classList.add("appear");

     hideTimer = setTimeout(() => {
          header.classList.remove("appear");
     }, 2000);

})