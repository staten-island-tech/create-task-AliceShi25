import "../styles/style.css";
import { DOMSelectors, kitty } from "./array";

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
              <button id="calculate">Calculate Compatibility</button>
          </div>
      </form>
  </div>
  <div id=resultBox>
  </div>`
    );
  },
};
kitty.forEach(catInfo.addInfo);

DOMSelectors.tab1.addEventListener("click", function () {
  remove.remove();
  catInfo.calcInfo();
});
