import { teachers } from "../../service/data.js";
import { generateModalFragment } from "../modals/modal.js";
import { editTeacherModal } from "../modals/edit-modals/edit.teacher.modal.js";
import { showAddingModal } from "../../utils.js";

export function editTeacher(teacherId) {
  const teacherToEdit = teachers.find((teacher) => teacher.id === teacherId);

  if (teacherToEdit) {
    generateModalFragment(editTeacherModal);
    showAddingModal();
  }
}
