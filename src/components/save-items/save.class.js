import { updateLocalStorage } from "../localStorage/local.storage.js";
import { Class } from "../class/class.js";
import { findTeacherByName } from "../teacher/teacher.utils.js";
import { capitalizeInitials, generateUniqueId } from "../../utils.js";
import { getValuesOfClassForm } from "../class/class.utils.js";

export function saveNewClass(itemId) {
  const CLASSES = "classes";

  console.log("save item-class works", itemId);
  try {
    getValuesOfClassForm();

    let newClass = new Class();

    if (teacherCheckbox.checked) {
      let selectedTeacher = teacherSelectOptions.value;
      let teacher = findTeacherByName(selectedTeacher);
      newClass.teachers.push(teacher);
    } else {
    }

    newClass.id = generateUniqueId();
    newClass.className = capitalizeInitials(classNameInput.value);

    if (classDataInput.value !== "") {
      newClass.data = classDataInput.value;
    }

    updateLocalStorage(newClass, CLASSES);
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
