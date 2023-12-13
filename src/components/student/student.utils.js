import { students } from "../../service/data.js";

export function findAverageGradeOfStudent(arr) {
  if (arr.length === 0) {
    return `N/A <i class="fa-solid fa-circle-exclamation"></i>`;
  }
  const numericGrades = arr.map((grade) => parseFloat(grade));

  if (numericGrades.some(isNaN)) {
    return `N/A <i class="fa-solid fa-circle-exclamation"></i>`;
  }

  let totalOfGrades = numericGrades.reduce((total, grade) => total + grade, 0);

  let averageOfGrades = totalOfGrades / arr.length;
  return Math.floor(averageOfGrades);
}

export function findStudentById(studentId) {
  const foundStudent = students.find((student) => student.id === studentId);
  return foundStudent || null;
}

export function getValuesOfStudentForm() {
  const classCheckbox = document.getElementById("classSelectCheckbox");
  const classSelectOptions = document.querySelector("#classSelectForm");
  const studentNameInput = document.querySelector("#studentNameInput");
  const studentDataInput = document.querySelector("#studentDataTextArea");
  const assignment1Input = document.querySelector("#assignment1Input");
  const gradeInput1 = document.querySelector("#grade1Input");
  const assignment2Input = document.querySelector("#assignment2Input");
  const gradeInput2 = document.querySelector("#grade2Input");
  const assignment3Input3 = document.querySelector("#assignment3Input");
  const gradeInput3 = document.querySelector("#grade3Input");

  const values = {
    classCheckbox: classCheckbox.checked,
    classSelectValue: classSelectOptions.value,
    studentName: studentNameInput.value,
    studentData: studentDataInput.value,
    assignment1: assignment1Input.value,
    assignment2: assignment2Input.value,
    assignment3: assignment3Input3.value,
    grade1: gradeInput1.value,
    grade2: gradeInput2.value,
    grade3: gradeInput3.value,
  };

  return values;
}
