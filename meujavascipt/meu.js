const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-bar");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});