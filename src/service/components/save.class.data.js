import { Class } from "../../functions.js";

export function saveNewClassData() {
  try {
    const classNameInput = document.getElementById("classNameInput");
    const teacherNameInput = document.querySelector("#teacherNameInput");
    const classDataInput = document.getElementById("classDataTextArea");

    let LMSchool = JSON.parse(localStorage.getItem("school"));
    console.log("Local Storage Data:", LMSchool);

    let newClassInput = new Class();
    newClassInput.className = classNameInput.value;
    newClassInput.teacher = teacherNameInput.value;
    newClassInput.data = classDataInput.value;

    if (LMSchool) {
      LMSchool.push(newClassInput);
    } else {
      LMSchool = [];
      LMSchool.push(newClassInput);
    }

    localStorage.setItem("school", JSON.stringify(LMSchool));

    console.log("checkpoint:data saved successfully");
  } catch (error) {
    console.error("error!!- while saving data:", error);
  }
}
