let toggle = document.querySelector(".toggle-button");
let menu = document.querySelector(".menu")
let nav = document.querySelector(".nav")

toggle.addEventListener("click", function (ev) {
    menu.classList.toggle("show");
})

