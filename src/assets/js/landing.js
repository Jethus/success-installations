const scrollingInner = document.querySelector(".scrolling-inner");
const logos = Array.from(scrollingInner.children);

logos.forEach((logo) => {
  scrollingInner.appendChild(logo.cloneNode(true));
});
