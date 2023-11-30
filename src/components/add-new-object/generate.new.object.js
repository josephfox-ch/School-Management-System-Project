import { generateModalFragment } from "../modals/modal.manager.js";
import { addNewClass } from "../modals/templates-modal/add.class.modal.js";
import { addNewTeacher } from "../modals/templates-modal/add.teacher.modal.js";
import { addNewStudent } from "../modals/templates-modal/add.student.modal.js";
import { getNewClassData } from "../../service/components/class.data.js";
import { saveNewClassData } from "../../service/components/localstorage.js";

export function generateNewObject() {
  const pEl = document.getElementById("add-text");
  const action = pEl.getAttribute("data-action");
  switch (action) {
    case "addNewClass":
      generateModalFragment(addNewClass);

      break;
    case "addNewTeacher":
      generateModalFragment(addNewTeacher);
      break;

    case "addNewStudent":
      generateModalFragment(addNewStudent);
      break;

    default:
      break;
  }
  const dynamicModal = new bootstrap.Modal(
    document.getElementById("dynamicModal")
  );
  dynamicModal.show();

  document.getElementById("saveClassChanges").addEventListener("click", () => {
    getNewClassData();
    saveNewClassData();
  });
}
