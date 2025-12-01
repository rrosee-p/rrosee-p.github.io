window.addEventListener('load', () => {
  const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero .btn');
  heroElements.forEach(el => {
    el.style.opacity = '1';
  });
});


