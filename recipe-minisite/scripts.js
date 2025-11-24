// Responsive menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const navBurger = document.getElementById('navBurger');
    const nav = document.getElementById('mainNav');

    // Toggle menu on burger click
    navBurger.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
    });

    // Optional: close menu when clicking outside nav
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav') && nav.classList.contains('show-menu')) {
            nav.classList.remove('show-menu');
        }
    });
});