document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // 1. Mobile Main Menu Toggle
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("show");
  });

  // 2. Loop Through All Dropdowns
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const currentMenu = toggle.nextElementSibling;

      // Close all OTHER dropdowns before opening this one
      dropdownToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.classList.remove("active");
          otherToggle.nextElementSibling.classList.remove("show");
        }
      });

      // Toggle current dropdown and animate arrow
      toggle.classList.toggle("active");
      currentMenu.classList.toggle("show");
    });
  });

  // 3. Global Click: Close everything when clicking blank areas
  document.addEventListener("click", () => {
    navLinks.classList.remove("show");
    dropdownToggles.forEach((toggle) => {
      toggle.classList.remove("active");
      toggle.nextElementSibling.classList.remove("show");
    });
  });
});
