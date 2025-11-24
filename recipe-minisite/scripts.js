// JS for responsive menu
document.addEventListener("DOMContentLoaded", function () {
    const navBurger = document.getElementById('navBurger');
    const nav = document.getElementById('mainNav');

    navBurger.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav') && nav.classList.contains('show-menu')) {
            nav.classList.remove('show-menu');
        }
    });
});