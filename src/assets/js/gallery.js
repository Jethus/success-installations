// Gallery
const allImages = Array.from(document.querySelectorAll(".gallery-item"));
const batchSize = 12;
let currentIndex = 0;

function isMobile() {
  return window.innerWidth <= 768;
}

function showNextBatch() {
  const nextImages = allImages.slice(currentIndex, currentIndex + batchSize);
  nextImages.forEach((img) => {
    img.style.display = "block";
  });
  currentIndex += batchSize;

  if (currentIndex >= allImages.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
}

// Initially hide all images
allImages.forEach((img, i) => {
  img.style.display = "none";
  img.addEventListener("click", () => {
    if (!isMobile()) openLightbox(i);
  });
});

// Show first batch
showNextBatch();

document.getElementById("loadMoreBtn").addEventListener("click", showNextBatch);

// 2) LIGHTBOX
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

let currentLightboxIndex = -1; // which image is currently shown

function openLightbox(index) {
  // Clamp so we don't go out of bounds
  if (index < 0) index = 0;
  if (index >= allImages.length) index = allImages.length - 1;

  currentLightboxIndex = index;
  const largeSrc = allImages[currentLightboxIndex].dataset.large;
  lightboxImage.src = largeSrc ? largeSrc : allImages[currentLightboxIndex].src;
  lightboxModal.classList.remove("hidden");
}

function closeLightbox() {
  lightboxModal.classList.add("hidden");
  lightboxImage.src = "";
  currentLightboxIndex = -1;
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxModal.addEventListener("click", (e) => {
  if (e.target === lightboxModal) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightboxModal.classList.contains("hidden")) return;

  if (e.key === "ArrowLeft") {
    openLightbox(currentLightboxIndex - 1);
  } else if (e.key === "ArrowRight") {
    openLightbox(currentLightboxIndex + 1);
  } else if (e.key === "Escape") {
    closeLightbox();
  }
});
