import { generateModalFragment } from "../modals/modal.js";
import { editClassModal } from "../modals/edit-modals/edit.class.modal.js";
import { showAddingModal } from "../../utils.js";
import { findClassById } from "../class/class.utils.js";

export function showEditClassForm(classId) {
  const classToBeEdited = findClassById(classId);

  if (classToBeEdited) {
    generateModalFragment(editClassModal);
    showAddingModal();

    document.getElementById("teacherCheckbox").checked =
      classToBeEdited.teachers.length > 0;
    document.getElementById("teachersSelectForm").value =
      classToBeEdited.teachers[0]?.teacherName || "";
    document.getElementById("classNameInput").value =
      classToBeEdited.className || "";
    document.getElementById("classDataTextArea").value =
      classToBeEdited.data || "";
  }
}
