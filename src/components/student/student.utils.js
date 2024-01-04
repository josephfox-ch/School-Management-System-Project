import { students } from "../../service/data.js";
import { capitalizeInitials } from "../../utils.js";

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
  const grade1Input = document.querySelector("#grade1Input");
  const assignment2Input = document.querySelector("#assignment2Input");
  const grade2Input = document.querySelector("#grade2Input");
  const assignment3Input = document.querySelector("#assignment3Input");
  const grade3Input = document.querySelector("#grade3Input");

  const values = {
    classCheckbox: classCheckbox.checked,
    classSelectValue: classSelectOptions.value,
    studentName: capitalizeInitials(studentNameInput.value),
    studentData: studentDataInput.value,
    assignment1: capitalizeInitials(assignment1Input.value),
    assignment2: capitalizeInitials(assignment2Input.value),
    assignment3: capitalizeInitials(assignment3Input.value),
    grade1: parseFloat(grade1Input.value),
    grade2: parseFloat(grade2Input.value),
    grade3: parseFloat(grade3Input.value),
  };

  return values;
}
