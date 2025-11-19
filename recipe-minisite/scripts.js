// scripts.js for responsive menu

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuPanel = document.getElementById("menuPanel");

    // Toggle menu visibility on burger click
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent click from bubbling to html
        menuPanel.classList.toggle("visible");
    });

    // Close menu if clicking outside the nav
    document.addEventListener("click", (e) => {
        if (!e.target.closest("#menuPanel") && !e.target.closest("#menuToggle")) {
            menuPanel.classList.remove("visible");
        }
    });

    // Optional: Toggle submenus inside the panel
    const dropdownItems = menuPanel.querySelectorAll(".dropdown > a");
    dropdownItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // prevent default anchor behavior
            const parent = item.parentElement;
            parent.classList.toggle("open");
        });
    });
});