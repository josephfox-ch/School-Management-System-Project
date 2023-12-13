import { findClassByName } from "../class/class.utils.js";
import { capitalizeInitials } from "../../utils.js";
import { updateLocalStorage } from "../localStorage/local.storage.js";
import {
  findTeacherById,
  getValuesOfTeacherForm,
} from "../teacher/teacher.utils.js";

export function updateTeacher(teacherId) {
  const editedTeacher = findTeacherById(teacherId);
  const formValues = getValuesOfTeacherForm();

  console.log("updateTeacher works")
}
