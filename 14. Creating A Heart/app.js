let redHeart = document.querySelector(".red-heart");
let greyHeart = document.querySelector(".grey-heart");

greyHeart.addEventListener("click", () => {
  redHeart.classList.add("animation");
});
redHeart.addEventListener("click", () => {
  redHeart.classList.remove("animation");
});
