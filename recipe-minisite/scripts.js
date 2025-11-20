// scripts.js for responsive menu

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const navBurger = document.getElementById("navBurger");

    // Toggle the whole nav when burger is clicked
    navBurger.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.classList.toggle("clicked");
    });

    // Close nav if clicking outside of it
    document.addEventListener("click", (e) => {
        if (!e.target.closest("nav") && !e.target.closest("#navBurger")) {
            nav.classList.remove("clicked");

            // Close all dropdowns too
            const allMenus = document.querySelectorAll("nav > ul > li");
            allMenus.forEach(menu => menu.classList.remove("clicked"));
        }
    });

    // Handle dropdown toggles
    const topMenus = document.querySelectorAll("nav > ul > li");
    topMenus.forEach(menu => {
        menu.addEventListener("click", (e) => {
            // stop menu click from closing nav
            e.stopPropagation();

            // toggle clicked state
            const alreadyClicked = menu.classList.contains("clicked");

            // close all menus
            topMenus.forEach(m => m.classList.remove("clicked"));

            // reopen only if it was not previously clicked
            if (!alreadyClicked) {
                menu.classList.add("clicked");
            }
        });
    });
});