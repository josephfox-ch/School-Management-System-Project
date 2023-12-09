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
                <a href="#" class="text-primary mx-3"><i class="fas fa-edit "></i></a>
                <a href="#" class="text-danger"><i class="fas fa-trash-alt "></i></a>
              </div>
              <h5 class="card-title text-warning">${teacher.teacherName}</h5>
              <h6 class="card-subtitle mb-2">${teacher.expertise}</h6>
              <p class="card-text">${teacher.data}</p>
              <div class= " d-flex justify-content-around">
                <a href="#" class="card-link text-info">Students</a>
                <a href="#" class="card-link text-warning">Teachers</a>
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
