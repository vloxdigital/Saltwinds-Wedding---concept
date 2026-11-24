const navbtn = document.querySelector(".nav-btn");
const navscreen = document.querySelector(".nav-screen");
const body = document.body;

navbtn.addEventListener("click", () => {
     navscreen.classList.toggle("show");
     navbtn.classList.toggle("cross");
     body.classList.toggle("off-scroll");
})