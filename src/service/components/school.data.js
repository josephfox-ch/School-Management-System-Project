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
    storedSchoolData.classes.forEach((classEl) => {
      LMSchool.addClass(classEl);
    });
  }

  if (storedSchoolData.teachers && storedSchoolData.teachers.length > 0) {
    storedSchoolData.teachers.forEach((teacher) => {
      LMSchool.addTeacher(teacher);
    });
  }

  if (storedSchoolData.students && storedSchoolData.students.length > 0) {
    storedSchoolData.students.forEach((student) => {
      LMSchool.addStudent(student);
    });
  }
}

console.log("LMS", LMSchool);