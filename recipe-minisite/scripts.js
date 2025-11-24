// Toggle the mobile menu
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("navMenu");

btn.onclick = function () {
    menu.classList.toggle("open");
};


// Dropdown toggle for "Recipes" and "Recipe Websites"
const dropToggles = document.querySelectorAll(".drop-toggle");

dropToggles.forEach(toggle => {
    toggle.addEventListener("click", function (event) {
        event.preventDefault(); // stop page jump
        const section = this.parentElement; // li element
        section.classList.toggle("open");   // open/close dropdown
    });
});