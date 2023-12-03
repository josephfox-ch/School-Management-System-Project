class School {
  constructor() {
    this.classes = [];
  }

  addClass(newClass) {
    this.classes.push(newClass);
  }
}
let storedSchoolData = JSON.parse(localStorage.getItem("school"));

export const LMSchool = new School();
if (storedSchoolData.classes && storedSchoolData.classes.length > 0) {
  storedSchoolData.classes.forEach((classEl) => {
    LMSchool.addClass(classEl);
  });
}

console.log("LMS", LMSchool);
