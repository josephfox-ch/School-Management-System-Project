import { additionalSectBodyFragment } from "./components/additional-content-body.js";

function additionalSectionFragment() {
  const additionalContainer = document.createElement("section");
  additionalContainer.innerHTML = ` <div class=" card text-center m-5 ">
  <div class="card-header">
  <h5 class="card-title">HiCoder 23/24 LMS</h5>
  </div>
  <div class="card-body">
    ${additionalSectBodyFragment()}
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>`;
  return additionalContainer;
}

export const additionalContainer = additionalSectionFragment();
