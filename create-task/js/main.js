import "../styles/style.css";
import { DOMSelectors, kitty, cats } from "./array";

const catInfo = {
  addInfo: function (cat) {
    DOMSelectors.parent.insertAdjacentHTML(
      "beforeend",
      `<div class="imageCards">
              <img class="image" src="${cat.image}">
              <h2>${cat.name}</h2>
              <div class="imageInfo">
              <h3>lifespan:${cat.lifespan} </h3>
              <h4> weight:${cat.weight}</h4>
              <h5>Fun Fact: ${cat.funFact}</h5>
              </div>
              </div>`
    );
  },
};
kitty.forEach(catInfo.addInfo);
cats.sort();
cats.forEach(function (item) {
  let o = document.createElement("option");
  o.text = item;
  o.value = item;
  cName.appendChild(o);
});

function create() {
  let card = {};
  card.name = DOMSelectors.name.value;
  card.cName = DOMSelectors.cName.value;
  card.percentage = Math.floor(Math.random() * (100 - 1)) + 1;
  DOMSelectors.results.insertAdjacentHTML(
    "beforeend",
    `<h2>${card.name} and ${card.cName} are ${card.percentage}% compatible</h2>`
  );
  if (card.percentage < 25) {
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<h3>no compat ig</h3>`
    );
  } else if (card.percentage >= 25 && card.percentage < 50) {
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<h3>so so compat ig</h3>`
    );
  } else if (card.percentage >= 50 && card.percentage < 75) {
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<h3>so so so compat ig</h3>`
    );
  } else {
    DOMSelectors.results.insertAdjacentHTML("beforeend", `<h3>compat yuh</h3>`);
  }
  DOMSelectors.results.insertAdjacentHTML(
    "beforeend",
    `<button id="remove">Clear</button>`
  );
}

function none() {
  DOMSelectors.name.value = "";
  DOMSelectors.cName.value = "";
}

function clear() {
  remove.addEventListener("click", function () {
    DOMSelectors.removes.forEach((node) => {
      node.textContent = ``;
    });
    DOMSelectors.calcB.disabled = false;
  });
}

DOMSelectors.form.addEventListener("submit", function (addCard) {
  addCard.preventDefault();
  DOMSelectors.calcB.disabled = true;
  create();
  none();
  clear();
});

// const remove = {
//   remove: function () {
//     document.querySelectorAll(".imageCards").forEach((card) => card.remove());
//   },
// };

// DOMSelectors.tab1.addEventListener("click", function () {
//   remove.remove();
//   catInfo.calcInfo();
// });
