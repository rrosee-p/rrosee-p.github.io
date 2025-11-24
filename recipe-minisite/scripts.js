// Handle dropdowns for both sections
const dropdownLinks = document.querySelectorAll(".drop-link");

dropdownLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page jump
        const parent = this.parentElement;
        parent.classList.toggle("open");
    });
});