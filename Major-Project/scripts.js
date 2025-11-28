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

    // Show first slide
    showSlide(index);

    // Change slide every 4 seconds
    setInterval(() => {
        nextSlide();
        slides[index].classList.add("fade"); // add fade animation each time
    }, 4000);
});

