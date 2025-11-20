// Simple Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("visible");
    });
});