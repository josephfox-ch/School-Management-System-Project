import { students } from "../../service/data.js";
import { generateModalFragment } from "../modals/modal.js";
import { editStudentModal } from "../modals/edit-modals/edit.student.modal.js";
import { showAddingModal } from "../../utils.js";

export function editStudent(studentId) {
  const studentToEdit = students.find((student) => student.id === studentId);

  if (studentToEdit) {
    generateModalFragment(editStudentModal);
    showAddingModal();
  }
}
