let header = document.querySelector(".header");
let hasbg = false;
let logoLight = document.querySelector(".logo-light");
let logoDark = document.querySelector(".logo-dark");

window.addEventListener("scroll", function (ev) {
  if (window.pageYOffset > 10) {
    if (!hasbg) {
      header.classList.add("header-bg-color");
      hasbg = true;
      logoLight.classList.add("hidden");
      logoDark.classList.remove("hidden");
    }
  } else {
    header.classList.remove("header-bg-color");
    hasbg = false;
    logoLight.classList.remove("hidden");
    logoDark.classList.add("hidden");
  }
});

let menuButton = document.querySelector(".menu-button");
let nav = document.querySelector(".nav");

menuButton.addEventListener("click", function (ev) {
  nav.classList.toggle("show");
});
