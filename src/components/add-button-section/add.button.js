import { addNewButtonIcon } from "./add.button.icon.js";
import { capitalizeFirstLetter, changeButtonColors } from "../../utils.js";

export function addNewButtonFragment(content) {
  const addNewButtonSection = document.createElement("section");

  let btnColor = changeButtonColors(content);

  if (content == "class" || content == "teacher" || content == "student") {
    addNewButtonSection.innerHTML = `
      <div class="container text-center my-3">
        ${addNewButtonIcon.innerHTML}
        <p id="add-text" data-action="addNew${capitalizeFirstLetter(
          content
        )}Modal">Add New ${capitalizeFirstLetter(content)}</p>
      </div>
    `;

    addNewButtonSection
      .querySelector("#add-new-button")
      .classList.add(btnColor);
  }

  return addNewButtonSection;
}
