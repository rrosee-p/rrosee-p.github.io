// scripts.js — navigation behaviors (mobile-first)
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelectorAll("#burgerBtn");
  const navs = document.querySelectorAll(".site-nav");

  // Toggle main menu visibility (mobile)
  document.querySelectorAll("#burgerBtn").forEach(btn => {
    btn.addEventListener("click", function () {
      const nav = this.closest(".site-nav");
      const list = nav.querySelector("#mainMenu");
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", String(!expanded));
      list.classList.toggle("open");
    });
  });

  // Submenu toggles (for each nav instance)
  document.querySelectorAll(".site-nav .has-sub").forEach(item => {
    const toggle = item.querySelector(".sub-toggle");
    const submenu = item.querySelector(".sub-list");
    toggle.addEventListener("click", function (e) {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      submenu.classList.toggle("open");
    });
  });

  // Close menus when clicking outside
  document.documentElement.addEventListener("click", (e) => {
    if (!e.target.closest(".site-nav")) {
      document.querySelectorAll(".nav-list .sub-list.open").forEach(s => s.classList.remove("open"));
      document.querySelectorAll(".sub-toggle[aria-expanded='true']").forEach(t => t.setAttribute("aria-expanded", "false"));
      document.querySelectorAll("#mainMenu.open").forEach(m => m.classList.remove("open"));
      document.querySelectorAll("#burgerBtn[aria-expanded='true']").forEach(b => b.setAttribute("aria-expanded", "false"));
    }
  });
});
