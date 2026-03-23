const introLogoWrap = document.getElementById("introLogoWrap");
const profileScreen = document.getElementById("profileScreen");

setTimeout(() => {
  profileScreen.classList.remove("hidden");
  profileScreen.classList.add("show");
}, 2600);

document.querySelectorAll(".profile-card").forEach((card) => {
  card.addEventListener("click", function () {
    this.style.transform = "scale(0.96)";
  });
});
