function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

const handleClick = () => {
  const trigger = getRandomHexColor();
  body.style.backgroundColor = trigger;
  color.textContent = trigger;
}

changeColor.addEventListener('click', handleClick);