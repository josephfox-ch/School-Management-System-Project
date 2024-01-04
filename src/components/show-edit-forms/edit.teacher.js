import { generateModalFragment } from "../modals/modal.js";
import { editTeacherModal } from "../modals/edit-modals/edit.teacher.modal.js";
import { showAddingModal } from "../../utils.js";
import { findTeacherById } from "../teacher/teacher.utils.js";

export function showEditTeacherForm(teacherId) {
  const teacherToBeEdited = findTeacherById(teacherId);

  if (teacherToBeEdited) {
    generateModalFragment(editTeacherModal);
    showAddingModal();

    document.getElementById("classSelectCheckbox").checked =
      teacherToBeEdited.classes.length > 0;
    document.querySelector("#classSelectForm").value =
      teacherToBeEdited.classes[0]?.className || "";
    document.querySelector("#teacherNameInput").value =
      teacherToBeEdited.teacherName || "";
    document.getElementById("expertiseInput").value =
      teacherToBeEdited.expertise || "";
    document.getElementById("teacherDataTextArea").value =
      teacherToBeEdited.data || "";
  }
  
}
