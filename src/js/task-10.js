function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.children[0];
const createBtn = controls.children[1];
const destroyBtn = controls.children[2];
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  amount = input.value;
  const div = document.createElement("div");
  const initSize = "30px";
  div.style.width = initSize;
  div.style.height = initSize;
  // [] -> divs in [] -> [].map(width,height,bgColor)
  let array = [];
  console.log(div);
  for (let i = 1; i <= amount; i++) {
    array.push(div);
  }
  console.log(array);

  const markup = [...array].forEach((element) => {
    element.style.backgroundColor = getRandomHexColor();
    boxes.append(element);
  });
  return markup;
};

createBtn.addEventListener("click", createBoxes);
