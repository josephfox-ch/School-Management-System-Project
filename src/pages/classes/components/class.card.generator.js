const classes = JSON.parse(localStorage.getItem("classes"));

export function generateClassCardsHTML() {
  let cardsHTML = "";

  if (Array.isArray(classes)) {
    classes.forEach((classEl) => {
      cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card border-danger" style="width: 18rem;">
            <div class="card-body">
            <div class="d-flex justify-content-end mb-2">
                <a href="#" class="text-primary mx-2"><i class="fas fa-edit"></i></a>
                <a href="#" class="text-danger"><i class="fas fa-trash-alt"></i></a>
              </div>
              <h5 class="card-title text-danger">${classEl.className}</h5>
              <h6 class="card-subtitle mb-2 text-warning">${classEl.instructor}</h6>
              <p class="card-text">${classEl.data}</p>
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
