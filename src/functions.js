import { headerFragment } from "./components/header/header.js";
import { footerFragment } from "./components/footer/footer.js";
import { mainContentFragment } from "./components/main-content/main-content.js";
import { additionalContainer } from "./components/additional-content/additional-content.js";
import { classes, teachers, students, CARD_DATA } from "./service/data.js";
import { saveDataToLocalStorage, updateLMSchool } from "./utils.js";
import { LMSchool } from "./service/components/school.data.js";
import { alertDiv } from "./components/alertsHTML/alertsHTML.js";

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
  const foundTeacher = teachers.find(
    (teacher) => teacher.teacherName === teacherName
  );
  return foundTeacher || null;
}

export function findClassByName(className) {
  const foundClass = classes.find((cls) => cls.className === className);
  return foundClass || null;
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

export function manageSavingEvents() {
  const saveChangesButtons = [
    ...document.getElementsByClassName("saveChanges"),
  ];

  saveChangesButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const dataType = event.target.id;
      saveDataToLocalStorage(dataType);
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

export function editClass(classId) {
  console.log("edit-class", classId);
}
export function editTeacher(teacherId) {
  console.log("edit-teacher", teacherId);
}
export function editStudent(studentId) {
  console.log("edit-student", studentId);
}

export function removeTeacher(teacherId) {
  LMSchool.teachers = LMSchool.teachers.filter(
    (teacher) => teacher.id !== teacherId
  );

  LMSchool.classes.forEach((cls) => {
    cls.teachers = cls.teachers.filter((teacher) => teacher.Id !== teacherId);
  });

  updateLMSchool();
}

export function removeStudent(studentId) {
  LMSchool.students = LMSchool.students.filter(
    (student) => student.id !== studentId
  );

  updateLMSchool();
}

export function removeClass(classId) {
  LMSchool.classes = LMSchool.classes.filter(
    (classItem) => classItem.id !== classId
  );

  LMSchool.teachers.forEach((teacher) => {
    teacher.classes = teacher.classes.filter(
      (classItem) => classItem.classId !== classId
    );
  });

  LMSchool.students.forEach((student) => {
    student.classes = student.classes.filter(
      (classItem) => classItem.classId !== classId
    );
  });
  updateLMSchool();
}
