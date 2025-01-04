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

const menuToggle = document.getElementById("menu-toggle");

let savedScrollY = 0;

// Whenever the checkbox changes state
menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    // Menu is opening
    savedScrollY = window.scrollY; // Store current scroll pos
    // Lock the body using position fixed
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    // Set 'top' so the body stays exactly where it was
    document.body.style.top = `-${savedScrollY}px`;
  } else {
    // Menu is closing
    // Restore normal body scrolling
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    // Re-enable scrolling at the previous scrollY
    window.scrollTo(0, savedScrollY);
  }
});
