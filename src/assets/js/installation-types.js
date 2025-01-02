const cardList = document.querySelector(".card-list");
const cards = document.querySelectorAll(".card");

// sliding accordion
cardList.addEventListener("click", (e) => {
  const clickedCard = e.target.closest(".card");
  if (!clickedCard) return;
  if (cards) {
    const isExpanded = clickedCard.classList.contains("expanded");

    // Close all panels
    cards.forEach((c) => {
      c.classList.remove("expanded");
      const details = c.querySelector(".details");
      if (details) {
        details.style.maxHeight = null;
      }
    });

    // Open the clicked panel if it was not already active
    if (!isExpanded) {
      clickedCard.classList.add("expanded");
      const details = clickedCard.querySelector(".details");
      if (details) {
        details.style.maxHeight = details.scrollHeight + "px";
      }
    }
  }
});
