let indicater = document.querySelector(".scroll-indicater .progress");
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

const scroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicater.style.width = `${scrolled}%`;
};
window.addEventListener("scroll", scroll);
