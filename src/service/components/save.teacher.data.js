import { Teacher } from "../../functions.js";

export function saveNewTeacherData() {
  try {
    const teacherInput = document.querySelector("#teacherNameInput");
    const expertiseInput = document.getElementById("expertiseInput");
    const teacherDataInput = document.getElementById("teacherDataTextArea");

    let newTeacherInput = new Teacher();

    newTeacherInput.teacherName = teacherInput.value;
    newTeacherInput.expertise = expertiseInput.value;
    newTeacherInput.data = teacherDataInput.value;

    let updatedSchool = JSON.parse(localStorage.getItem("school")) || {
      classes: [],
      teachers: [],
      students: [],
    };

    if (updatedSchool) {
      updatedSchool.teachers.push(newTeacherInput);
      localStorage.setItem("school", JSON.stringify(updatedSchool));
      console.log("checkpoint data saved successfully");
    } else {
      console.error("error-unable to save data");
    }
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
