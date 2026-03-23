document.querySelectorAll(".profile-card").forEach((card) => {
  card.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
  });
});
