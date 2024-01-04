import { generateModalFragment } from "./modal.js";
import { addNewClassModal } from "../modals/add-modals/add.class.modal.js";
import { addNewTeacherModal } from "../modals/add-modals/add.teacher.modal.js";
import { addNewStudentModal } from "../modals/add-modals/add.student.modal.js";
import { manageSavingEvents } from "../../functions.js";
import { showAddingModal } from "../../utils.js";

export function generateNewModal() {
  const pEl = document.getElementById("add-text");
  const action = pEl.getAttribute("data-action");
  switch (action) {
    case "addNewClassModal":
      generateModalFragment(addNewClassModal);

      break;
    case "addNewTeacherModal":
      generateModalFragment(addNewTeacherModal);
      break;

    case "addNewStudentModal":
      generateModalFragment(addNewStudentModal);
      break;

    default:
      break;
  }

  showAddingModal();

  manageSavingEvents();
}
