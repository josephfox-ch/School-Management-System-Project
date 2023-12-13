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
  const assignmentInput1 = document.querySelector("#assignmentInput1");
  const gradeInput1 = document.querySelector("#gradeInput1");
  const assignmentInput2 = document.querySelector("#assignmentInput2");
  const gradeInput2 = document.querySelector("#gradeInput2");
  const assignmentInput3 = document.querySelector("#assignmentInput3");
  const gradeInput3 = document.querySelector("#gradeInput3");

  const values = {
    classCheckbox: classCheckbox.checked,
    classSelectValue: classSelectOptions.value,
    studentName: studentNameInput.value,
    studentData: studentDataInput.value,
    assignment1: assignmentInput1.value,
    assignment2: assignmentInput2.value,
    assignment3: assignmentInput3.value,
    grade1: gradeInput1.value,
    grade2: gradeInput2.value,
    grade3: gradeInput3.value,
  };

  return values;
}
