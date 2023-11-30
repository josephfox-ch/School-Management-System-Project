import { teachersData } from "../../../service/data.js";

function generateTeacherCardsHTML(teachersData) {
  let cardsHTML = "";

  teachersData.forEach((teacherData) => {
    cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card border-warning" style="width: 18rem;">
            <div class="card-body">
              <h5 class="text-warning">${teacherData.instructor}</h5>
              <h6 class="card-subtitle mb-2">${teacherData.profession}</h6>
              <p class="card-text">${teacherData.data}</p>
              <div class= " d-flex justify-content-around">
              <a href="#" class="card-link text-info">Students</a>
              <a href="#" class="card-link text-danger">Classes</a>
              </div>
            </div>
          </div>
        </div>
      `;
  });

  return cardsHTML;
}

export const teachersCards = generateTeacherCardsHTML(teachersData);
