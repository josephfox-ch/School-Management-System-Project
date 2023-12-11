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

    let newTeacher = new Teacher();

    newTeacher.id = generateUniqueId();
    newTeacher.teacherName = teacherNameInput.value;
    newTeacher.expertise = expertiseInput.value;

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
