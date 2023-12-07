import {
  Class,
  generateUniqueId,
  findTeacherByName,
  updateLocalStorage,
} from "../../functions.js";

export function saveNewClassData() {
  try {
    const classNameInput = document.getElementById("classNameInput");
    const selectedTeacher = document.getElementById("teachersSelectForm").value;
    const classDataInput = document.getElementById("classDataTextArea");
    const teacherOptions = document.getElementById("teacherOptions");

    let newClassInput = new Class();
    newClassInput.id = generateUniqueId();
    newClassInput.className = classNameInput.value;
    newClassInput.data = classDataInput.value;

    if (teacherOptions.checked) {
      let teacher = findTeacherByName(selectedTeacher);
      newClassInput.teachers.push(teacher);
    }
    const CLASSES = "classes";
    updateLocalStorage(newClassInput, CLASSES);
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
