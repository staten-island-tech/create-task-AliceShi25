import "../styles/style.css";
import { kitty } from "./array";

const DOMSelectors = {
  parent: document.getElementById("parent"),
  tab1: document.getElementById("tab1"),
  tab2: document.getElementById("tab2"),
  name: document.getElementById("Name"),
  cName: document.getElementById("cName"),
  CB: document.getElementById("compBox"),
};

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
  calcInfo: function () {
    DOMSelectors.parent.insertAdjacentHTML(
      "afterend",
      `<div id="CompBox">
      <h2>What's your cat compatibility?</h2>
      <form id="form">
          <div class="forms-info">
              <label for="Name">Your Name</label>
              <input type="text" id="Name" required />
          </div>
          <div class="forms-info">
              <label for="cName">Cat Name</label>
              <input type="text" id="cName" required />
          </div>
          <div class="forms-info">
              <button>Calculate Compatibility</button>
          </div>
      </form>
  </div>`
    );
  },
};
kitty.forEach(catInfo.addInfo);

const remove = {
  remove: function () {
    document.querySelectorAll(".imageCards").forEach((card) => card.remove());
  },
  none: function () {
    DOMSelectors.name.value = "";
    DOMSelectors.cName.value = "";
  },
};

function clear() {
  let clear = DOMSelectors.tab2;
  clear.forEach((node) => {
    node.addEventListener("click", function (addCard) {
      addCard.target.parentElement.remove();
    });
  });
}

DOMSelectors.tab1.addEventListener("click", function () {
  remove.remove();
  catInfo.calcInfo();
});

DOMSelectors.CB.addEventListener("submit", function (addCard) {
  addCard.preventDefault();
  clear();
});
