const header = document.getElementById("header");
const fadeInElements = document.querySelectorAll(".fade-in");
const mobileNav = document.getElementById("nav-menu");

const observerOptions = {
  root: null, // Observe changes in the viewport
  rootMargin: "0px", // No margin around the root
  threshold: 0.2, // 20% of the element must be visible to trigger the callback
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
}, observerOptions);

// Utility function to initialize or wait for animations
const initializeFadeIn = () => {
  fadeInElements.forEach((element) => observer.observe(element));
};

document.addEventListener("DOMContentLoaded", initializeFadeIn);

document.getElementById("phone").addEventListener("input", function (e) {
  let input = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
  let formatted = "";

  if (input.length > 0) {
    formatted += input.substring(0, 3); // First three digits
  }
  if (input.length > 3) {
    formatted += " - " + input.substring(3, 6); // Next three digits
  }
  if (input.length > 6) {
    formatted += " - " + input.substring(6, 10); // Final four digits
  }

  e.target.value = formatted; // Update the input field
});
