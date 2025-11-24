// Toggle mobile menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Toggle dropdowns for "Recipes" and "Recipe Websites"
const dropToggles = document.querySelectorAll(".drop-toggle");

dropToggles.forEach(toggle => {
    toggle.addEventListener("click", function(event) {
        event.preventDefault(); // prevent page jump

        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle("open"); // open/close this dropdown
    });
});