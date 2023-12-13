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


