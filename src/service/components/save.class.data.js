import { Class } from "../../functions.js";

export function saveNewClassData() {
  try {
    const classNameInput = document.getElementById("classNameInput");
    const teacherNameInput = document.querySelector("#teacherNameInput");
    const classDataInput = document.getElementById("classDataTextArea");

    let newClassInput = new Class();
    newClassInput.className = classNameInput.value;
    newClassInput.teacher = teacherNameInput.value;
    newClassInput.data = classDataInput.value;

    let updatedSchool = JSON.parse(localStorage.getItem("school")) || {
      classes: [],
    };

    if (updatedSchool) {
      updatedSchool.classes.push(newClassInput);
      localStorage.setItem("school", JSON.stringify(updatedSchool));
      console.log("checkpoint data saved successfully");
    } else {
      console.error("error-unable to save data");
    }
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
