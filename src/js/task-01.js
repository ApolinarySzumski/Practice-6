const log = (x) => console.log(x);

// const categories = document.querySelector("#categories");
// const arrayOfCategories = [...categories.children];
// const numberOfCategories = arrayOfCategories.length;

// log(`Number of categories: ${numberOfCategories}`);

// const items = document.querySelectorAll(".item");
// // [...items].forEach((item) =>
// //   log(
// //     `Category: ${item.children[0].textContent}, Elements: ${item.children[1].children.length}`,
// //   ),
// // );

// log(`Category: ${items[0].firstElementChild.textContent}`);
// log(`Elements: ${items[0].lastElementChild.children.length}`);
// log(`Category: ${items[1].firstElementChild.textContent}`);
// log(`Elements: ${items[1].lastElementChild.children.length}`);
// log(`Category: ${items[2].firstElementChild.textContent}`);
// log(`Elements: ${items[2].lastElementChild.children.length}`);

const items = document.querySelectorAll(".item");

log(`Number of categories: ${items.length}`);

items.forEach((item) =>
  log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}
`),
);
