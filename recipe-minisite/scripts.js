// Toggle the mobile menu
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("navMenu");

btn.onclick = function () {
    menu.classList.toggle("open");
};


// Handle dropdowns for Recipes + Recipe Websites
const dropToggles = document.querySelectorAll(".drop-toggle");

dropToggles.forEach(toggle => {
    toggle.addEventListener("click", function (event) {
        event.preventDefault(); // prevents page jumping

        const section = this.parentElement;

        // Close other dropdowns when one is opened (optional but nicer)
        document.querySelectorAll(".drop-section").forEach(s => {
            if (s !== section) {
                s.classList.remove("open");
            }
        });

        // Toggle the clicked dropdown
        section.classList.toggle("open");
    });
});