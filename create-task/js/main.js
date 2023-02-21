import "../styles/style.css";
import { DOMSelectors, kitty, cats } from "./array";

const catInfo = {
  addInfo: function (cat) {
    DOMSelectors.parent.insertAdjacentHTML(
      "beforeend",
      `<div class="imageCards">
              <img class="image" src="${cat.image}" alt="${cat.name}">
              <h3 class="text">${cat.name}</h3>
              <div class="imageInfo">
              <h4>lifespan:${cat.lifespan} </h4>
              <h4> weight:${cat.weight}</h4>
              <h4>Fun Fact: ${cat.funFact}</h4>
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

// const e = document.getElementById("cName");
// function onChange() {
//   const text = e.options[e.selectedIndex].text;
//   console.log(text);
// }
// e.onchange = onChange;
// onChange();

const Select = document.getElementById("cName");
const text = Select.options[Select.selectedIndex].innerHTML;

function create() {
  let card = {};
  card.name = DOMSelectors.name.value;
  card.cName = text;
  card.percentage = Math.floor(Math.random() * (100 - 1)) + 1;
  DOMSelectors.results.insertAdjacentHTML(
    "beforeend",
    `<h3>You and ${card.cName} are ${card.percentage}% compatible</h4>`
  );
  if (card.percentage < 25) {
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<h3>Not compatible at all. Try another cat?</h3>`
    );
  } else if (card.percentage >= 25 && card.percentage < 50) {
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<h3>Not very compatible. You can try your best.</h3>`
    );
  } else if (card.percentage >= 50 && card.percentage < 75) {
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<h3>Somewhat compatible. Maybe this could be your cat.</h3>`
    );
  } else {
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<h3>Very compatible. The two of you are destined for each other. </h3>`
    );
  }
  DOMSelectors.results.insertAdjacentHTML(
    "beforeend",
    `<button id="remove">Clear</button>`
  );
}

function none() {
  DOMSelectors.name.value = "";
  // DOMSelectors.cName.value = "";
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
