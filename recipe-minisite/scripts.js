// This script opens and closes the navigation menu

// Get the button and the menu
const menuButton = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// When the button is clicked, show or hide the menu
menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});