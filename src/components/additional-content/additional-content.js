import { additionalSectBodyFragment } from "./components/additional-content-body.js";

function additionalSectionFragment() {
  const additionalContainer = document.createElement("section");
  additionalContainer.innerHTML = ` <div class="mb-5" id="additional-content">
    <div class="card">
      <div class="card-body p-4">
        ${additionalSectBodyFragment()}
      </div>
    </div>
  </div>`;
  return additionalContainer;
}

export const additionalContainer = additionalSectionFragment();
