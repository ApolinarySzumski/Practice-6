function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const controlsInput = controls.children[0];
const createBtn = controls.children[1];
const destroyBtn = controls.children[2];
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = controlsInput.value;

  const initSize = 30;

  let array = [];
  for (let i = 0; i < amount; i++) {
    array.push(i);
  }

  array.forEach((i) => {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${initSize + i * 10}px`;
    divEl.style.height = `${initSize + i * 10}px`;
    boxes.append(divEl);
  });
};

const destroyBoxes = () => (boxes.innerHTML = "");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
