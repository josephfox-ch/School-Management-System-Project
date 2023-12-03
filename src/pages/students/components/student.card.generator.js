import { students } from "../../../service/data.js";

function generateStudentCardsHTML(students) {
  let cardsHTML = "";

  students.forEach((student) => {
    cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card border-info" style="width: 18rem;">
            <div class="card-body">
            <div class="d-flex justify-content-end mb-2">
                <a href="#" class="text-primary mx-3"><i class="fas fa-edit"></i></a>
                <a href="#" class="text-danger"><i class="fas fa-trash-alt"></i></a>
              </div>
              <h5 class="card-title text-info">${student.name}</h5>
              <h6 class="card-subtitle mb-2 text-danger">${student.class}</h6>
              <p class="card-text">${student.data}</p>
              <div class="d-flex justify-content-start ">
              <a href="#" class="card-link">Average Grade:</a>
              <a href="#" class="card-link">${findAverageGradeOfStudent(
                student.grades
              )}</a>
              </div>
            </div>
          </div>
        </div>
      `;
  });

  return cardsHTML;
}

function findAverageGradeOfStudent(arr) {
  if (arr.length === 0) {
    return "No grades available";
  }

  let totalofGrades = 0;
  arr.forEach((grade) => {
    totalofGrades += grade;
  });
  return totalofGrades / arr.length;
}

export const studentsCards = generateStudentCardsHTML(students);
