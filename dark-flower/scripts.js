// DARK MODE TOGGLE - WORKING VERSION

document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("darkModeToggle");
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Toggle theme on click
    button.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

});
