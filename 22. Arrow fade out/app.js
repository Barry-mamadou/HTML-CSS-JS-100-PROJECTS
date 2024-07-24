const arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
  if (position >= 200) {
    arrow.classList.add("fade-out");
  } else {
    arrow.classList.remove("fade-out");
  }
});
