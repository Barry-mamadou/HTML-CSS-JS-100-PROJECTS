let toggler = document.getElementById("switch");
let label = document.querySelector("label");

toggler.addEventListener("click", () => {
  toggler.checked
    ? ((document.body.style.background = "black"),
      (label.style.background = "white"))
    : ((document.body.style.background = "white"),
      (label.style.background = "black"));
});
