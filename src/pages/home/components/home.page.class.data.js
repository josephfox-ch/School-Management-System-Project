import { findLengthOf } from "../../../functions.js";
import { classes } from "../../../service/data.js";

const numberOfClasses = findLengthOf(classes);

export const homePageClassesDataFragment = () => {
  return `
    <div class="col mb-3 mx-auto">
      <div class="card border-danger mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <h5 class="text-danger">Number of Classes</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">${numberOfClasses}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  `;
};
