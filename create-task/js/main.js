import "../styles/style.css";
import { array } from "./array";

const DOMSelectors = {
  parent: document.getElementById("parent"),
  search: document.getElementById("searchBar"),
};

const catInfo = {
  addInfo: function (card) {
    DOMSelectors.parent.insertAdjacentHTML(
      "beforeend",
      `<div class="imageCards">
              <img class="image" src="${card.image}">
              <h2>${card.name}</h2>
              <div class="imageInfo">
              <h3>lifespan:${card.lifespan} </h3>
              <h4> weight:${card.weight}</h4>
              <h5>Fun Fact: ${card.funFact}</h5>
              </div>
              </div>`
    );
  },
};
array.forEach(catInfo.addInfo);
