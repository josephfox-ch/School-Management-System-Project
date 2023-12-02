import { generateModalFragment } from "../modals/modal.manager.js";
import { addNewClassModal } from "../modals/templates-modal/add.class.modal.js";
import { addNewTeacherModal } from "../modals/templates-modal/add.teacher.modal.js";
import { addNewStudentModal } from "../modals/templates-modal/add.student.modal.js";

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
  const dynamicModal = new bootstrap.Modal(
    document.getElementById("dynamicModal")
  );
  dynamicModal.show();

  const saveChangesButtons = [
    ...document.getElementsByClassName("saveChanges"),
  ];

  saveChangesButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dataType = event.target.id;
      console.log("CHECKPOINT", dataType);
      saveDataToLocalStorage(dataType);
    });
  });
}
