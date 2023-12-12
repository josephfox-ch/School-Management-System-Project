import { classes } from "../../service/data.js";
import { generateModalFragment } from "../modals/modal.js";
import { editClassModal } from "../modals/edit-modals/edit.class.modal.js";
import { showAddingModal } from "../../utils.js";

export function editClass(classId) {
  const classToEdit = classes.find((classEl) => classEl.id === classId);

  if (classToEdit) {
    generateModalFragment(editClassModal);
    showAddingModal();

    document.getElementById("teacherCheckbox").checked =
      classToEdit.teachers.length > 0;
    document.getElementById("teachersSelectForm").value =
      classToEdit.teachers[0]?.teacherName || "";
    document.getElementById("classNameInput").value =
      classToEdit.className || "";
    document.getElementById("classDataTextArea").value = classToEdit.data || "";
  }
}
