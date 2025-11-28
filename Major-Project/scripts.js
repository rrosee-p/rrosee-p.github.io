document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.style.display = "none");
        slides[i].style.display = "block";
    }

    function nextSlide() {
        index++;
        if (index >= slides.length) index = 0;
        showSlide(index);
    }

    showSlide(index); // Show the first slide initially
    setInterval(nextSlide, 4000); // Change slide every 4 seconds
});
