let btn = document.querySelector(".btn");
let trailorContainer = document.querySelector(".trailor-container");
let closeIcon = document.querySelector(".close-icon");
let video = document.querySelector("video");

btn.addEventListener("click", () => {
  trailorContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  trailorContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
