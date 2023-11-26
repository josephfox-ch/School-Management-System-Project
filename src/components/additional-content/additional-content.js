import { handleAdditionalContentBody } from "./components/additional-content-body.js";

export function handleAdditionalContent() {
  const additionalContainer = document.createElement("section");
  additionalContainer.innerHTML = ` <div class="mb-5" id="additional-content">
    <div class="card">
      <div class="card-body p-4">
        ${handleAdditionalContentBody()}
      </div>
    </div>
  </div>`;
  return additionalContainer;
}
