import { classesData } from "../../../service/data.js";

function generateClassCardsHTML(classesData) {
  let cardsHTML = "";

  classesData.forEach((classData) => {
    cardsHTML += `
      <div class="col mb-3 mx-auto">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${classData.className}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${classData.instructor}</h6>
            <p class="card-text">${classData.data}</p>
            <div class= " d-flex justify-content-around">
            <a href="#" class="card-link">Students</a>
            <a href="#" class="card-link">Teachers</a>
            </div>
            
          </div>
        </div>
      </div>
    `;
  });

  return cardsHTML;
}

export const classesCards = generateClassCardsHTML(classesData);
