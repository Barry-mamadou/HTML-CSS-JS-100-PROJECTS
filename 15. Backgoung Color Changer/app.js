let btn = document.querySelector("#btn");
let hexColor = document.querySelector("#hex-code");

let randomColors = () => {
  let hexCaratres = "0123456789ABCDEF";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += hexCaratres[Math.floor(Math.random() * 16)];
  }
  return colors;
};

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = hexColor.innerHTML = randomColors();
});
