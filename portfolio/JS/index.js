const bar = document.getElementById('bar');
const navLinks = document.getElementById('nav-links');
const cross = document.getElementById('cross');

bar.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

cross.addEventListener('click', () => {
  navLinks.classList.remove('show');
})

const textElement = document.getElementById('text');
const textToType = "Hello, I'm Yagna Gangajaliya";
let index = 0;

function type() {
  if (index < textToType.length) {
    textElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

type();