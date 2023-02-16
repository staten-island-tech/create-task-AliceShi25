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
};
kitty.forEach(catInfo.addInfo);

// const remove = {
//   remove: function () {
//     document.querySelectorAll(".imageCards").forEach((card) => card.remove());
//   },
// };

// DOMSelectors.tab1.addEventListener("click", function () {
//   remove.remove();
//   catInfo.calcInfo();
// });
