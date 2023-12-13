import { Teacher } from "../teacher/teacher.js";
import { updateLocalStorage } from "../localStorage/local.storage.js";
import { findClassByName } from "../class/class.utils.js";
import { capitalizeInitials, generateUniqueId } from "../../utils.js";
import { getValuesOfTeacherForm } from "../teacher/teacher.utils.js";
import { updateTeacher } from "../update-items/update.teacher.js";
export function saveNewTeacher(itemId) {
  try {
    if (itemId) {
      updateTeacher(itemId);
    } else {
      const TEACHERS = "teachers";
      const formValues = getValuesOfTeacherForm();
      let newTeacher = new Teacher();
      newTeacher.id = generateUniqueId();

      newTeacher.teacherName = capitalizeInitials(formValues.teacherName);
      newTeacher.expertise = capitalizeInitials(formValues.expertise);

      if (!formValues.expertise) {
        newTeacher.expertise = "Expertise Info  Not Available!";
      }

      if (formValues.teacherData!== "") {
        newTeacher.data = formValues.teacherData;
      }

      if (formValues.classCheckbox) {
        let selectedClass = formValues.classSelectValue;
        let classItem = findClassByName(selectedClass);
        newTeacher.classes.push({
          classId: classItem.id,
          className: classItem.className,
        });
        classItem.teachers.push(newTeacher);
        updateLocalStorage(classItem, "classes");
      }

      updateLocalStorage(newTeacher, TEACHERS);
    }
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
