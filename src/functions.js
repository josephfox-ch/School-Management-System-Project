import { headerFragment } from "./components/header/header.js";
import { footerFragment } from "./components/footer/footer.js";
import { mainContentFragment } from "./components/main-content/main-content.js";
import { additionalContainer } from "./components/additional-content/additional-content.js";
import { classes, teachers, students, CARD_DATA } from "./service/data.js";
import { saveDataToLocalStorage } from "./utils.js";
import { LMSchool } from "./service/components/school.data.js";

const app = document.getElementById("app");

function renderHeader() {
  app.innerHTML = headerFragment().innerHTML;
}

export function renderContent(contentId = "home") {
  console.log("renderContent fonksiyonu çalıştı.");
  renderHeader();
  console.log("header calisti");
  console.log(contentId);
  app.innerHTML +=
    mainContentFragment(contentId).innerHTML + additionalContainer.innerHTML;

  renderFooter();
  console.log("footer calisti");
}

function renderFooter() {
  app.innerHTML += footerFragment().innerHTML;
}

export function renderApp() {
  renderHeader();

  renderContent();
}

export class Class {
  constructor(className) {
    this.id = "";
    this.className = className;
    this.teachers = [];
    this.students = [];
    this.data = CARD_DATA;
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
    this.classes = [];
    this.data = CARD_DATA;
  }
}

export class Student {
  constructor(studentName) {
    this.id = "";
    this.studentName = studentName;
    this.classes = [];
    this.grades = {};
    this.data = CARD_DATA;
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

export function showAddingModal() {
  const dynamicModal = new bootstrap.Modal(
    document.getElementById("dynamicModal")
  );
  dynamicModal.show();
}

export function manageSavingEvents() {
  const saveChangesButtons = [
    ...document.getElementsByClassName("saveChanges"),
  ];

  saveChangesButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dataType = event.target.id;
      saveDataToLocalStorage(dataType);
      console.log("savedata calisti");
      console.log(dataType);
      location.reload();
    });
  });
}

export function findAverageGradeOfStudent(arr) {
  if (arr.length === 0) {
    return `No Grades <i class="fa-solid fa-circle-exclamation"></i>`;
  }

  let totalOfGrades = arr.reduce((total, grade) => total + grade, 0);
  return totalOfGrades / arr.length;
}

export function editItem(action, itemId) {
  console.log("edit-function-onclick");
  console.log(action, itemId);
}

export function removeItem(action, itemId) {
  console.log(action, itemId);
  console.log("remove Function");
}
