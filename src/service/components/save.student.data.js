import { Student } from "../../functions.js";

export function saveNewStudentData() {
    console.log("checkpoint-student")
  try {
    const selectedClass = document.querySelector("#studentSelectForm");
    const studentInput = document.querySelector("#studentNameInput");
    const studentDataInput = document.getElementById("studentDataTextArea");

    let newStudent = new Student();

    newStudent.className = selectedClass.value;
    newStudent.studentName = studentInput.value;
    newStudent.data = studentDataInput.value;
    // newStudent.grades.push(studentGradesInput);
console.log(selectedClass,studentInput,studentDataInput)
    let updatedSchool = JSON.parse(localStorage.getItem("school")) || {
      classes: [],
      teachers: [],
      students: [],
    };

    if (updatedSchool) {
      updatedSchool.students.push(newStudent);
      localStorage.setItem("school", JSON.stringify(updatedSchool));
      console.log("checkpoint data saved successfully");
    } else {
      console.error("error-unable to save data");
    }
    console.log("updated-checkpoint",updatedSchool)
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
