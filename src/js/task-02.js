const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ---------------------------------------------------------------------

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ingredientsList.append(li);
})