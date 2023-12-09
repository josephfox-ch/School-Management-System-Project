import { findLengthOf } from "../../../functions.js";
import { students } from "../../../service/data.js";

const numberOfStudents = findLengthOf(students);

export const homePageStudentsDataFragment = () => {
  return `
    <div class="col mb-3 mx-auto">
      <div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <h5 class="text-info">Number of Students</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">${numberOfStudents}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  `;
};
