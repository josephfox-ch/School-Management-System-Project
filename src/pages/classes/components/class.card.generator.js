import { classes } from "../../../service/data.js";

const classCardContainer = document.createElement("div");

export function generateClassCardsHTML() {
  classCardContainer.innerHTML = "";

  if (Array.isArray(classes) && classes.length != 0) {
    classes.forEach((classEl) => {
      let teacherName =
        classEl.teachers.length > 0
          ? classEl.teachers[0].teacherName
          : "Teacher Info Not Available!";

      const cardHTML = `
          <div class="col mb-3 mx-auto">
            <div class="card border-danger" style="width: 18rem;">
              <div class="card-body">
                <div class="d-flex justify-content-end mb-2">
                  <button id="${classEl.id}" data-action="class" class="edit-button btn btn-primary btn-sm">
                  Edit
                  </button>
                  <button id="${classEl.id}" data-action="class" class="remove-button btn btn-danger btn-sm mx-2">
                  Remove
                  </button>
                </div>
                <h5 class="card-title text-dark">${classEl.className}</h5>
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

      classCardContainer.innerHTML += cardHTML;
    });
  } else {
    classCardContainer.innerHTML =
      '<p class="text-danger fw-bold">&#9888; No Classes Available ! </p>';
  }

  return classCardContainer.innerHTML;
}
