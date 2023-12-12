import { checkId } from "../../utils.js";

export function updateLocalStorage(newItem, targetContainer) {
  let updatedSchool = JSON.parse(localStorage.getItem("school")) || {
    classes: [],
    teachers: [],
    students: [],
  };

  if (updatedSchool && updatedSchool.hasOwnProperty(targetContainer)) {
    if (checkId(newItem, updatedSchool[targetContainer])) {
      updatedSchool[targetContainer] = updatedSchool[targetContainer].map(
        (element) => {
          if (element.id === newItem.id) {
            return newItem;
          }
          return element;
        }
      );
    } else {
      updatedSchool[targetContainer].push(newItem);
    }

    localStorage.setItem("school", JSON.stringify(updatedSchool));
    console.log("Checkpoint: Data saved successfully");
  } else {
    console.error("Error: Unable to save data");
  }
}
