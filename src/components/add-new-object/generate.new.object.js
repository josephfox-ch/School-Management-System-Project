import { generateModalFragment } from "../modals/modal.manager.js";
import { addNewClassModal } from "../modals/templates-modal/add.class.modal.js";
import { addNewTeacherModal } from "../modals/templates-modal/add.teacher.modal.js";
import { addNewStudentModal } from "../modals/templates-modal/add.student.modal.js";
import { manageSaveEvents ,showAddingModal } from "../../functions.js";

export function generateNewObjectModal() {
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
  
  showAddingModal()

  manageSaveEvents()
  
}
