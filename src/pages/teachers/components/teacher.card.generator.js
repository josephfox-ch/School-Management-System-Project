import { teachersData } from "../../../service/data.js";

function generateTeacherCardsHTML(teachersData) {
  let cardsHTML = "";

  teachersData.forEach((teacherData) => {
    cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${teacherData.instructor}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${teacherData.profession}</h6>
              <p class="card-text">${teacherData.data}</p>
              <div class= " d-flex justify-content-around">
              <a href="#" class="card-link">Students</a>
              <a href="#" class="card-link">Classes</a>
              </div>
            </div>
          </div>
        </div>
      `;
  });

  return cardsHTML;
}

export const teachersCards = generateTeacherCardsHTML(teachersData);
