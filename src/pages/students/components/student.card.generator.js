const studentsData = [
  {
    name: "Joseph FOX",
    class: "FullStack",
    data: "This is the students data  template for  checkpoint project .",
    grades: [99, 90, 95, 89, 100],
  },
  {
    name: "Joseph FOX",
    class: "FullStack",
    data: "This is the students data  template for  checkpoint project .",
    grades: [99, 90, 95, 89, 100],
  },
  {
    name: "Joseph FOX",
    class: "FullStack",
    data: "This is the students data  template for  checkpoint project .",
    grades: [99, 90, 95, 89, 100],
  },
];

function generateStudentCardsHTML(studentsData) {
  let cardsHTML = "";

  studentsData.forEach((student) => {
    cardsHTML += `
        <div class="col mb-3 mx-auto">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${
                student.class
              }</h6>
              <p class="card-text">${student.data}</p>
              <a href="#" class="card-link">Average Grade:</a>
              <a href="#" class="card-link">${findAverageGradeOfStudent(
                student.grades
              )}</a>
            </div>
          </div>
        </div>
      `;
  });

  return cardsHTML;
}

function findAverageGradeOfStudent(arr) {
  if (arr.length === 0) {
    return "No grades available";
  }

  let totalofGrades = 0;
  arr.forEach((grade) => {
    totalofGrades += grade;
  });
  return totalofGrades / arr.length;
}

export const studentsCards = generateStudentCardsHTML(studentsData);
