import "../styles/style.css";
import { array } from "./array";

const DOMSelectors = {
  parent: document.getElementById("parent"),
  tab1: document.getElementById("tab1"),
  tab2: document.getElementById("tab2"),
  clear: document.getElementById("tab2"),
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
      "beforeend",
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
              <input type="submit" id="button" value="Calculate Compatability">
          </div>
      </form>
  </div>`
    );
  },
};
array.forEach(catInfo.addInfo);

const remove = {
  remove: function () {
    document.querySelectorAll(".imageCards").forEach((card) => card.remove());
  },
};

DOMSelectors.tab1.addEventListener("click", function () {
  remove.remove();
  catInfo.calcInfo();
});

function thisRemove() {
  const el = document.getElementById("CompBox");
  el.remove();
}
