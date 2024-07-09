let cursor = document.querySelector(".cursor");

const moveCursor = (pageX, pageY) => {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
document.addEventListener("mousemove", (event) => {
  moveCursor(event.pageX, event.pageY);
});
