let typedTextSpan = document.querySelector(".typed-text");
let cursor = document.querySelector(".cursor");

let words = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird", "🔥"];
const typingDelay = 200;
const erasingDElay = 200;
const newWordDelay = 2000;

let index = 0;
let charIndex = 0;

const type = () => {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, erasingDElay + 1300);
  }
};
const erase = () => {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDElay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, newWordDelay);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newWordDelay);
  }
});
