import "../styles/style.css";
import { array } from "./array";

const DOMSelectors = {
  parent: document.getElementById("parent"),
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
};
array.forEach(catInfo.addInfo);
