document.addEventListener("DOMContentLoaded", function () {
    const navBurger = document.getElementById('navBurger');
    const nav = document.getElementById('mainNav');
    const dropdownParents = document.querySelectorAll('.has-dropdown');

    // Toggle mobile menu
    navBurger.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
    });

    // Toggle dropdowns on mobile
    dropdownParents.forEach(parent => {
        parent.addEventListener('click', function (e) {
            // Only on mobile
            if (window.innerWidth <= 768) {
                e.stopPropagation(); // prevent closing menu
                parent.classList.toggle('show-dropdown');
            }
        });
    });

    // Close menu if click outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav')) {
            nav.classList.remove('show-menu');
            dropdownParents.forEach(p => p.classList.remove('show-dropdown'));
        }
    });
});