import { teachers } from "../../../service/data.js";

export function generateTeacherCardsHTML() {
  let cardsHTML = "";

  if (Array.isArray(teachers) && teachers.length != 0) {
    teachers.forEach((teacher) => {
      cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card border-warning" style="width: 18rem;">
            <div class="card-body">
            <div class="d-flex justify-content-end mb-2">
            <button id="${teacher.id}" data-action="teacher" class="edit-button btn btn-primary btn-sm">
            Edit
            </button>
            <button id="${teacher.id}" data-action="teacher" class="remove-button btn btn-danger btn-sm mx-2">
            Remove
            </button>
              </div>
              <h5 class="card-title ">${teacher.teacherName}</h5>
              <h6 class="card-subtitle mb-2">${teacher.expertise}</h6>
              <p class="card-text">${teacher.data}</p>
              <div class= " d-flex justify-content-around">
                <a href="#" data-action= "student" id="${teacher.id}" class="card-link list-items text-info">Students</a>
                <a href="#" data-action= "class" id="${teacher.id}" class="card-link list-items text-danger">Classes</a>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    cardsHTML =
      ' <p class = "text-warning fw-bold" >&#9888; No Teachers Available ! </p>';
  }

  return cardsHTML;
}
