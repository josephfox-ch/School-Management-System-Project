import { findLengthOf} from "../../../functions.js";
import { teachers } from "../../../service/data.js";

const numberOfTeachers = findLengthOf(teachers);

export const homePageTeachersDataFragment = () => {
  return `
    <div class="col mb-3 mx-auto">
      <div class="card border-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <h5 class="text-warning">Number of Teacher</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">${numberOfTeachers}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  `;
};
