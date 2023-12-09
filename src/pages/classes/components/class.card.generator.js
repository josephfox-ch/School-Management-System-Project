import { classes } from "../../../service/data.js";


export function generateClassCardsHTML() {
  let cardsHTML = "";

  if (Array.isArray(classes) && classes.length != 0) {
    classes.forEach((classEl) => {
      let teacherName =
        classEl.teachers.length > 0
          ? classEl.teachers[0].teacherName
          : "Teacher Info Not Available!";

      cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card border-danger" style="width: 18rem;">
            <div class="card-body">
              <div class="d-flex justify-content-end mb-2">
                <button id="${classEl.id}" class="edit-buttons btn btn-dark btn-sm">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="remove-buttons btn btn-danger btn-sm mx-2">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
              <h5 class="card-title text-danger">${classEl.className}</h5>
              <h6 class="card-subtitle mb-2 text-warning">${teacherName}</h6>
              <p class="card-text">${classEl.data}</p>
              <div class="d-flex justify-content-around">
                <a href="#" class="card-link text-info">Students</a>
                <a href="#" class="card-link text-warning">Teachers</a>
              </div>
            </div>
          </div>
        </div>
      `;

     
      // const cardContainer = document.createElement("div");
      // cardContainer.innerHTML = cardsHTML;
      // const editButton = document.querySelector(".edit-buttons");
      // const removeButton = document.querySelector(".remove-buttons");
      
      // editButton.addEventListener("click", () => {
      //   editClass(classEl.id);
      // });
      
      // removeButton.addEventListener("click", () => {
      //   const classIndex = classes.findIndex(c => c.id === classEl.id);
      //   if (classIndex !== -1) {
      //     classes.splice(classIndex, 1);
      //     renderContent("class");
      //   }
      // });

      
      
      

     
    });
  } else {
    cardsHTML =
      '<p class="text-danger fw-bold">&#9888; No Classes Available ! </p>';
  }



  return cardsHTML;
}
