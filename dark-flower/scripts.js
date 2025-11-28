// DARK MODE BUTTON SCRIPT
document.addEventListener("DOMContentLoaded", () => {
    const darkmodeButton = document.getElementById("darkModebutton");
    const body = document.body;

    // Load saved user preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkmodeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
