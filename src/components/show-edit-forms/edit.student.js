import { generateModalFragment } from "../modals/modal.js";
import { editStudentModal } from "../modals/edit-modals/edit.student.modal.js";
import { showAddingModal } from "../../utils.js";
import { findStudentById } from "../student/student.utils.js";

export function showEditStudentForm(studentId) {
  const studentToBeEdited = findStudentById(studentId);
  if (studentToBeEdited) {
    generateModalFragment(editStudentModal);
    showAddingModal();

    document.getElementById("classSelectCheckbox").checked =
      studentToBeEdited.classes.length > 0;
    document.querySelector("#classSelectForm").value =
      studentToBeEdited.classes[0]?.className || "";
    document.querySelector("#studentNameInput").value =
      studentToBeEdited.studentName || "";
    document.getElementById("studentDataTextArea").value =
      studentToBeEdited.data || "";

    const assignmentKeys = Object.keys(studentToBeEdited.grades);
    const assignmentGrades = Object.values(studentToBeEdited.grades);

    assignmentKeys.forEach((assignment, index) => {
      document.getElementById(`assignment${index + 1}Input`).value = assignment;
    });
    assignmentGrades.forEach((grade, index) => {
      document.getElementById(`grade${index + 1}Input`).value = grade;
    });
  }
}
