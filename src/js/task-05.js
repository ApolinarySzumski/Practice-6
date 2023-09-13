const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleInput = (event) => {
  const { value } = event.target;
  if (value !== "") {
    nameOutput.textContent = value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", handleInput);
