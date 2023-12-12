export function findAverageGradeOfStudent(arr) {
  if (arr.length === 0) {
    return `No Grades <i class="fa-solid fa-circle-exclamation"></i>`;
  }

  let totalOfGrades = arr.reduce((total, grade) => total + grade, 0);
  return totalOfGrades / arr.length;
}
