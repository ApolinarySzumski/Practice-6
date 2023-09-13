const validationInput = document.querySelector("#validation-input");
const dataLength = validationInput.getAttribute("data-length");

const isValid = (event) => {
  if (event.target.value.length !== Number.parseInt(dataLength)) {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  } else {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
};

validationInput.addEventListener("blur", isValid);