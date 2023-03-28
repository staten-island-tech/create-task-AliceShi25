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
cats.forEach(function (item) {
  let o = document.createElement("option");
  o.text = item;
  o.value = item;
  cName.appendChild(o);
});

document.getElementById("calculate").onclick = function () {
  const e = document.getElementById("cName");
  const text = e.options[e.selectedIndex].text;
  document.getElementById("container").innerHTML = "You selected " + text;
};

const submit = {
  create: function () {
    let card = {};
    card.percentage = Math.floor(Math.random() * (100 - 1)) + 1;
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<h3>Your compatibility with this cat breed is ${card.percentage}%</h4>`
    );
    if (card.percentage < 25) {
      DOMSelectors.results.insertAdjacentHTML(
        "beforeend",
        `<h3>You're not compatible at all. Try another cat?</h3>`
      );
    } else if (card.percentage >= 25 && card.percentage < 50) {
      DOMSelectors.results.insertAdjacentHTML(
        "beforeend",
        `<h3>You're not very compatible. You can try your best.</h3>`
      );
    } else if (card.percentage >= 50 && card.percentage < 75) {
      DOMSelectors.results.insertAdjacentHTML(
        "beforeend",
        `<h3>You're somewhat compatible. Maybe this could be your cat.</h3>`
      );
    } else {
      DOMSelectors.results.insertAdjacentHTML(
        "beforeend",
        `<h3>You're very compatible. The two of you are destined for each other. </h3>`
      );
    }
    DOMSelectors.results.insertAdjacentHTML(
      "beforeend",
      `<button id="remove" onClick="window.location.reload();">Clear</button>`
    );
  },
  none: function () {
    DOMSelectors.name.value = "";
  },

  clear: function () {
    remove.addEventListener("click", function () {
      DOMSelectors.removes.forEach((node) => {
        node.textContent = ``;
      });
      DOMSelectors.calcB.disabled = false;
    });
  },
};

DOMSelectors.form.addEventListener("submit", function (addCard) {
  addCard.preventDefault();
  DOMSelectors.calcB.disabled = true;
  submit.create();
  submit.none();
  submit.clear();
});
