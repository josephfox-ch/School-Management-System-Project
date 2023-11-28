import { modalFragment } from "../modal/modal.manager.js";

export function createNewObject() {
  const pEl = document.getElementById("add-text");
  const action = pEl.getAttribute("data-action");
  switch (action) {
    case "addNewClass":
      modalFragment(addNewClass);
      break;
    case "addNewTeacher":
      modalFragment(addNewTeacher);
      break;

    case "addNewStudent":
      modalFragment(addNewStudent);
      break;

    default:
      break;
  }
}
