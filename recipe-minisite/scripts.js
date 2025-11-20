// scripts.js — menu toggle and dropdowns (mobile-first)
document.addEventListener("DOMContentLoaded", () => {

  // we have multiple pages that reuse the same IDs — pick the first matching menuToggle/menuPanel on the page
  const menuToggle = document.getElementById("menuToggle");
  const menuPanel = document.getElementById("menuPanel");

  // if menu elements exist on the page, wire them up
  if (menuToggle && menuPanel) {
    // open/close mobile panel
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const visible = menuPanel.classList.toggle("visible");
      // accessibility attributes
      menuToggle.setAttribute("aria-expanded", visible ? "true" : "false");
      menuPanel.setAttribute("aria-hidden", visible ? "false" : "true");
    });

    // close menu by clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#menuPanel") && !e.target.closest("#menuToggle")) {
        menuPanel.classList.remove("visible");
        menuToggle.setAttribute("aria-expanded", "false");
        menuPanel.setAttribute("aria-hidden", "true");
      }
    });

    // dropdown toggles inside the menu
    const dropToggles = menuPanel.querySelectorAll(".drop-toggle");
    dropToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle("open");
      });
    });
  }

});