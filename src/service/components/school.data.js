class School {
  constructor() {
    this.classes = [];
    this.teachers = [];
    this.students = [];
  }

  addClass(newClass) {
    this.classes.push(newClass);
  }
  addTeacher(newTeacher) {
    this.teachers.push(newTeacher);
  }
  addStudent(newStudent) {
    this.students.push(newStudent);
  }
}
let storedSchoolData = JSON.parse(localStorage.getItem("school"));

export const LMSchool = new School();
if (storedSchoolData) {
  if (storedSchoolData.classes && storedSchoolData.classes.length > 0) {
    LMSchool.classes = storedSchoolData.classes
  }

  if (storedSchoolData.teachers && storedSchoolData.teachers.length > 0) {
    LMSchool.teachers = storedSchoolData.teachers
  }

  if (storedSchoolData.students && storedSchoolData.students.length > 0) {
    LMSchool.students = storedSchoolData.students
  }
}

console.log("LMS", LMSchool);
