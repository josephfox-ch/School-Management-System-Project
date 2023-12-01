const teachers = JSON.parse(localStorage.getItem("teachers"));

export function generateTeacherCardsHTML() {
  let cardsHTML = "";

  if (Array.isArray(teachers)) {
    teachers.forEach((teacher) => {
      cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card border-danger" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-danger">${teacher.teacherName}</h5>
              <h6 class="card-subtitle mb-2 text-warning">${teacher.expertise}</h6>
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
  }

  return cardsHTML;
}

