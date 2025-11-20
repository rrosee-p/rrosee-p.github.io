// scripts.js for responsive recipe mini-site

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("mainNav");
    const navBurger = document.getElementById("navBurger");

    // Toggle main menu visibility on burger click
    navBurger.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent click from bubbling up
        nav.classList.toggle("show-menu");
    });

    // Toggle submenus on click
    const menuItems = nav.querySelectorAll("nav > ul > li");
    menuItems.forEach((item) => {
        const submenu = item.querySelector("ul");
        if (submenu) {
            item.querySelector("a").addEventListener("click", (e) => {
                e.preventDefault(); // prevent page jump
                submenu.classList.toggle("open");
            });
        }
    });

    // Close menu if clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest("#mainNav")) {
            nav.classList.remove("show-menu");
            // close all submenus
            const allSubmenus = nav.querySelectorAll("ul ul");
            allSubmenus.forEach((submenu) => submenu.classList.remove("open"));
        }
    });
});