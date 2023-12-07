import { headerFragment } from "./components/header/header.js";
import { footerFragment } from "./components/footer/footer.js";
import { mainContentFragment } from "./components/main-content/main-content.js";
import { additionalContainer } from "./components/additional-content/additional-content.js";
import { saveNewClassData } from "./service/components/save.class.data.js";
import { saveNewTeacherData } from "./service/components/save.teacher.data.js";
import { saveNewStudentData } from "./service/components/save.student.data.js";
import { classes, teachers, students } from "./service/data.js";
import { LMSchool } from "./service/components/school.data.js";

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
}

export function saveDataToLocalStorage(dataType) {
  switch (dataType) {
    case "saveNewClass":
      saveNewClassData();
      break;
    case "saveNewTeacher":
      saveNewTeacherData();
      break;
    case "saveNewStudent":
      saveNewStudentData();
      break;
  }
}

export function findLengthOf(arr) {
  return arr ? arr.length : 0;
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export class Class {
  constructor(className) {
    this.id = "";
    this.className = className;
    this.teachers = [];
    this.students = [];
    this.data = [];
  }

  addStudent(newStudent) {
    this.students.push(newStudent);
  }
}

export class Teacher {
  constructor(teacherName, expertise) {
    this.id = "";
    this.teacherName = teacherName;
    this.expertise = expertise;
    this.data = [];
  }
}

export class Student {
  constructor(studentName, className) {
    this.id = "";
    this.studentName = studentName;
    this.className = className;
    this.grades = {};
    this.data = [];
  }
  addGrades(assignment, grade) {
    this.grades[assignment] = grade;
  }
}

export function createOptionsFromClasses() {
  const selectElement = document.createElement("div");
  if (classes.length != 0) {
    classes.forEach((classItem) => {
      const optionElement = document.createElement("option");
      optionElement.value = classItem.className;
      optionElement.textContent = classItem.className;
      selectElement.appendChild(optionElement);
    });
  }

  return selectElement;
}

export function createOptionsFromTeachers() {
  const selectElement = document.createElement("div");
  if (teachers.length != 0) {
    teachers.forEach((teacher) => {
      const optionElement = document.createElement("option");
      optionElement.value = teacher.teacherName;
      optionElement.textContent = teacher.teacherName;
      selectElement.appendChild(optionElement);
    });
  }

  return selectElement;
}

export function generateUniqueId() {
  return Date.now().toString(36);
}

export function findTeacherByName(teacherName) {
  const wantedTeacher = teachers.find(
    (teacher) => teacher.teacherName === teacherName
  );
  return wantedTeacher || null;
}

export function findClassByName(className) {
  const wantedClass = classes.find(
    (classItem) => classItem.className === className
  );
  return wantedClass || null;
}

export function updateLocalStorage(newItem, targetContainer) {
  let updatedSchool = JSON.parse(localStorage.getItem("school")) || {
    classes: [],
    teachers: [],
    students: [],
  };

  if (updatedSchool && updatedSchool.hasOwnProperty(targetContainer)) {
    if (checkId(newItem, updatedSchool[targetContainer])) {
      updatedSchool[targetContainer] = updatedSchool[targetContainer].map(
        (element) => {
          if (element.id === newItem.id) {
            return newItem;
          }
          return element;
        }
      );
    } else {
      updatedSchool[targetContainer].push(newItem);
    }

    localStorage.setItem("school", JSON.stringify(updatedSchool));
    console.log("Checkpoint: Data saved successfully");
  } else {
    console.error("Error: Unable to save data");
  }
}

export function checkId(item, container) {
  for (let i = 0; i < container.length; i++) {
    if (container[i].id === item.id) {
      return true;
    }
  }
  return false;
}
