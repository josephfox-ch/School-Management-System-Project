import { students } from "../../../service/data.js";
import { findAverageGradeOfStudent } from "../../../functions.js";

export function generateStudentCardsHTML() {
  let cardsHTML = "";

  if (Array.isArray(students) && students.length !== 0) {
    students.forEach((student) => {
      let className =
        student.classes.length > 0
          ? student.classes[0].className
          : "Class Info Not Available!";

      cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card border-info" style="width: 18rem;">
            <div class="card-body">
            <div class="d-flex justify-content-end mb-2">
            <button id="${student.id}" data-action="student" class="edit-button btn btn-primary btn-sm">
            Edit
            </button>
            <button id="${student.id}" data-action="student" class="remove-button btn btn-danger btn-sm mx-2">
            Remove
            </button>
              </div>
              <h5 class="card-title">${student.studentName}</h5>
              <h6 class="card-subtitle mb-2">${className}</h6>
              <p class="card-text">${student.data}</p>
              <div class="d-flex justify-content-start ">
              <a href="#" class="card-link">Average Grade:</a>
              <a href="#" class="card-link">${findAverageGradeOfStudent(
                Object.values(student.grades)
              )}</a>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    cardsHTML =
      ' <p class = "text-info fw-bold" >&#9888; No Students Available ! </p>';
  }

  return cardsHTML;
}


