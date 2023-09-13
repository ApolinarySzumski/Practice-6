let counterValue = 0;

const value = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const refreshValue = () => (value.textContent = counterValue);
const handleDecrement = () => {
  counterValue--;
  refreshValue();
};
const handleIncrement = () => {
  counterValue++;
  refreshValue();
};

decrementBtn.addEventListener("click", handleDecrement);
incrementBtn.addEventListener("click", handleIncrement);
