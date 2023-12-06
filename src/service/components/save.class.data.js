import { Class, generateUniqueId, findTeacherByName } from "../../functions.js";

export function saveNewClassData() {
  try {
    const classNameInputValue = document.getElementById("classNameInput").value;
    const teachersSelectValue =
      document.getElementById("teachersSelectForm").value;
    const classDataInputValue =
      document.getElementById("classDataTextArea").value;
    const teacherOptionsChecked =
      document.getElementById("teacherOptions").checked;

    let newClassInput = new Class();
    newClassInput.id = generateUniqueId();
    newClassInput.className = classNameInputValue;
    let newClasstTeacher;
    if (teacherOptionsChecked) {
      newClasstTeacher = teachersSelectValue;
    } else {
      newClasstTeacher = "";
    }
    newClasstTeacher = findTeacherByName(newClasstTeacher);
    newClassInput.teachers.push(newClasstTeacher);
    newClassInput.data = classDataInputValue;

    let updatedSchool = JSON.parse(localStorage.getItem("school")) || {
      classes: [],
      teachers: [],
      students: [],
    };

    if (updatedSchool) {
      updatedSchool.classes.push(newClassInput);
      localStorage.setItem("school", JSON.stringify(updatedSchool));
      console.log("Checkpoint: Data saved successfully");
    } else {
      console.error("Error: Unable to save data");
    }
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
