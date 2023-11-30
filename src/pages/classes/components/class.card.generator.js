import { getAllClassData } from "../../../service/components/localstorage.js";

const allClassData = getAllClassData();

export function generateClassCardsHTML() {
  let cardsHTML = "";

  if (Array.isArray(allClassData)) {
    allClassData.forEach((classData) => {
      cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card border-danger" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-danger">${classData.className}</h5>
              <h6 class="card-subtitle mb-2 text-warning">${classData.instructor}</h6>
              <p class="card-text">${classData.data}</p>
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
  }

  return cardsHTML;
}
