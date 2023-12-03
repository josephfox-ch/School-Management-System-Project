import { headerFragment } from "./components/header/header.js";
import { footerFragment } from "./components/footer/footer.js";
import { mainContentFragment } from "./components/main-content/main-content.js";
import { additionalContainer } from "./components/additional-content/additional-content.js";
import { saveNewClassData } from "./service/components/save.class.data.js";
import { saveNewTeacherData } from "./service/components/save.teacher.data.js";

const app = document.getElementById("app");

function renderHeader() {
  app.innerHTML = headerFragment().innerHTML;
}

export function renderContent(contentId = "home") {
  renderHeader();
  app.innerHTML +=
    mainContentFragment(contentId).innerHTML + additionalContainer.innerHTML;

  renderFooter();
}

function renderFooter() {
  app.innerHTML += footerFragment().innerHTML;
}

export function renderApp() {
  renderHeader();

  renderContent();

  renderFooter();
}

export function saveDataToLocalStorage(data) {
  switch (data) {
    case "saveNewClass":
      saveNewClassData();
      break;
    case "saveNewTeacher":
      saveNewTeacherData();
      break;
    case "newStudentData":
      saveNewStudentData();
      break;
  }
}

export function findNumbersOf() {
  this.classes = function () {
    const classesData = JSON.parse(localStorage.getItem("classes"));
    return classesData ? classesData.length : 0;
  };

  this.teachers = function () {
    const teachersData = JSON.parse(localStorage.getItem("teachers"));
    return teachersData ? teachersData.length : 0;
  };

  this.students = function () {
    const studentsData = JSON.parse(localStorage.getItem("students"));
    return studentsData ? studentsData.length : 0;
  };
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export class Class {
  constructor(className, teacher) {
    this.className = className;
    this.teacher = teacher;
    this.students = [];
    this.data = [];
  }

  addStudent(newStudent) {
    this.students.push(newStudent);
  }
}

export class Teacher {
  constructor(teacherName, expertise) {
    this.teacherName = teacherName;
    this.expertise = expertise;
    this.data = [];
  }
}

export class Student {
  constructor(studentName, className) {
    this.studentName = studentName;
    this.className = className;
    this.grades = [];
  }
}
