// Dropdown buttons for the recipe lists
const dropdownButtons = document.querySelectorAll(".dropBtn");

dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
        const list = this.nextElementSibling;
        list.classList.toggle("show");
    });
});