import {
  Teacher,
  findClassByName,
  updateLocalStorage,
  generateUniqueId,
} from "../../functions.js";

export function saveNewTeacherData() {
  try {
    const classCheckbox = document.getElementById("classSelectCheckbox");
    const classSelectOptions = document.querySelector("#classSelectForm");
    const teacherNameInput = document.querySelector("#teacherNameInput");
    const expertiseInput = document.getElementById("expertiseInput");
    const teacherDataInput = document.getElementById("teacherDataTextArea");

    let selectedClass = classSelectOptions.value;
    let classItem = findClassByName(selectedClass);

    let newTeacher = new Teacher();

    newTeacher.id = generateUniqueId();
    newTeacher.teacherName = teacherNameInput.value;
    newTeacher.expertise = expertiseInput.value;
    newTeacher.data = teacherDataInput.value;

    if (classCheckbox.checked) {
      classItem.teachers.push(newTeacher);
      updateLocalStorage(classItem, "classes");
    }

    const TEACHERS = "teachers";
    updateLocalStorage(newTeacher, TEACHERS);
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
