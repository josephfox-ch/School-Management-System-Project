import { Teacher } from "../teacher/teacher.js";
import { updateLocalStorage } from "../localStorage/local.storage.js";
import { findClassByName } from "../class/class.utils.js";
import { capitalizeInitials, generateUniqueId } from "../../utils.js";

export function saveNewTeacher(itemId) {
  console.log("teacherItemID",itemId)
  console.log("save-items-teacher works")
  try {
    const classCheckbox = document.getElementById("classSelectCheckbox");
    const classSelectOptions = document.querySelector("#classSelectForm");
    const teacherNameInput = document.querySelector("#teacherNameInput");
    const expertiseInput = document.getElementById("expertiseInput");
    const teacherDataInput = document.getElementById("teacherDataTextArea");

    let newTeacher = new Teacher();

    newTeacher.id = generateUniqueId();
    newTeacher.teacherName = capitalizeInitials(teacherNameInput.value);
    newTeacher.expertise = capitalizeInitials(expertiseInput.value);

    if (!expertiseInput.value) {
      newTeacher.expertise = "Expertise Info  Not Available!";
    }

    if (teacherDataInput.value !== "") {
      newTeacher.data = teacherDataInput.value;
    }

    if (classCheckbox.checked) {
      let selectedClass = classSelectOptions.value;
      let classItem = findClassByName(selectedClass);
      newTeacher.classes.push({
        classId: classItem.id,
        className: classItem.className,
      });
      classItem.teachers.push(newTeacher);
      updateLocalStorage(classItem, "classes");
    }

    const TEACHERS = "teachers";
    updateLocalStorage(newTeacher, TEACHERS);
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
