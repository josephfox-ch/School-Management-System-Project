import { addNewButtonIcon } from "./add.button.icon.js";

export function addNewButtonFragment(content) {
  const addNewButtonSection = document.createElement("section");
  if (content == "class" || content == "teacher" || content == "student") {
    addNewButtonSection.innerHTML = `
    <div class= "container text-center my-3>
        ${addNewButtonIcon.innerHTML}
          <p data-action= "addNew${capitalizeFirstLetter(
            content
          )}">Add New ${capitalizeFirstLetter(content)}</p>
        </div>
        `;
  }
  return addNewButtonSection;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
