import { Teacher } from "../../functions.js";

export function saveNewTeacherData() {
 

  const teacherInput = document.querySelector("#teacherNameInput");
  const expertiseInput = document.getElementById("expertiseInput")
  const teacherDataInput = document.getElementById("teacherDataTextArea");

  let newTeacherInput = new Teacher();

  newTeacherInput.teacherName = teacherInput.value;
  newTeacherInput.expertise =expertiseInput.value;
  newTeacherInput.data = teacherDataInput.value;

  let existingData = localStorage.getItem("teachers");
  if (existingData) {
    existingData = JSON.parse(existingData);

    if (!Array.isArray(existingData)) {
      existingData = []; 
    }
  } else {
    existingData = [];
  }

  existingData.push(newTeacherInput);
  localStorage.setItem("teachers", JSON.stringify(existingData));
  console.log("checkpoint");
}
