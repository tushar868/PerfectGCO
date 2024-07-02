'use strict';

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const header = document.querySelector('.header');
const productsSection = document.querySelector('.products-section');
const navbarLinks = document.querySelectorAll(".navbar-link");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

// Add event listeners to all navbar links that have submenus
navbarLinks.forEach(function(navbarLink) {
  navbarLink.addEventListener("click", function(event) {
    const submenu = this.nextElementSibling;
    if (submenu && submenu.classList.contains("dropdown-menu")) {
      event.preventDefault(); // Prevent the default link behavior
      submenu.classList.toggle("active");
    }
  });
});

// Function to add or remove the background class from the header
function toggleHeaderBackground(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(toggleHeaderBackground, {
  root: null,
  threshold: 0 // Adjust the threshold as needed
});

// Observe the products section
observer.observe(productsSection);
