import { updateLocalStorage } from "../localStorage/local.storage.js";
import { Class } from "../class/class.js";
import { findTeacherByName } from "../teacher/teacher.utils.js";
import { capitalizeInitials, generateUniqueId } from "../../utils.js";
import { getValuesOfClassForm } from "../class/class.utils.js";
import{updateClass} from "../update-items/update.class.js"

export function saveNewClass(itemId) {
  try {
    if (itemId) {
      updateClass(itemId);
    } else {
      const CLASSES = "classes";
      const formValues = getValuesOfClassForm();
      let newClass = new Class();
      newClass.id = generateUniqueId();

      if (formValues.teacherCheckbox) {
        let selectedTeacher = formValues.teacherSelectValue;
        let teacher = findTeacherByName(selectedTeacher);
        newClass.teachers.push(teacher);
      }
      newClass.className = capitalizeInitials(formValues.className);

      if (formValues.classData !== "") {
        newClass.data = formValues.classData;
      }
      updateLocalStorage(newClass, CLASSES);
    }
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
