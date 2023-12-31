import { saveNewClass } from "./components/save-items/save.class.js";
import { saveNewTeacher } from "./components/save-items/save.teacher.js";
import { saveNewStudent } from "./components/save-items/save.student.js";
import { LMSchool } from "./components/school/school.js";
import { showEditClassForm } from "./components/show-edit-forms/edit.class.js";
import { showEditTeacherForm } from "./components/show-edit-forms/edit.teacher.js";
import { showEditStudentForm } from "./components/show-edit-forms/edit.student.js";
import { removeClass } from "./components/remove-items/remove.class.js";
import { removeTeacher } from "./components/remove-items/remove.teacher.js";
import { removeStudent } from "./components/remove-items/remove.student.js";
import { manageSavingEvents } from "./functions.js";
import { showClassListOfElement } from "./components/show-item-list/show.class.list.of.element.js";
import{showTeacherListOfElement} from "./components/show-item-list/show.teacher.list.of.element.js"
import { showStudentListOfElement } from "./components/show-item-list/show.student.list.of.element.js";

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function findLengthOf(arr) {
  return arr ? arr.length : 0;
}

export function capitalizeInitials(str) {
  let capitalStr = "";
  for (let i = 0; i < str.length; i++) {
    let currentChart = str[i];
    if (i == 0 || str[i - 1] == " ") {
      capitalStr += currentChart.toUpperCase();
    } else {
      capitalStr += currentChart;
    }
  }
  return capitalStr;
}

export function saveToLocalStorage(dataType,itemId) {
  switch (dataType) {
    case "class":
      saveNewClass(itemId);
      break;
    case "teacher":
      saveNewTeacher(itemId);
      break;
    case "student":
      saveNewStudent(itemId);
      break;
  }
}

export function editItem(action, itemId) {
  switch (action) {
    case "class":
      showEditClassForm(itemId);
      break;
    case "teacher":
      showEditTeacherForm(itemId);
      break;
    case "student":
      showEditStudentForm(itemId);
      break;
  }
  manageSavingEvents(itemId)
}

export function removeItem(action, itemId) {
  switch (action) {
    case "class":
      removeClass(itemId);
      break;
    case "teacher":
      removeTeacher(itemId);
      break;
    case "student":
      removeStudent(itemId);
      break;
  }
}

export function changeButtonColors(content) {
  let buttonColorClass = "";

  switch (content) {
    case "class":
      buttonColorClass = "text-danger";
      break;
    case "teacher":
      buttonColorClass = "text-warning";
      break;
    case "student":
      buttonColorClass = "text-info";
      break;
    default:
      break;
  }
  return buttonColorClass;
}

export function updateLMSchool() {
  localStorage.setItem("school", JSON.stringify(LMSchool));
  location.reload();
}

export function showAddingModal() {
  const dynamicModal = new bootstrap.Modal(
    document.getElementById("dynamicModal")
  );
  dynamicModal.show();
}

export function generateUniqueId() {
  return Date.now().toString(36);
}

export function checkId(item, container) {
  for (let i = 0; i < container.length; i++) {
    if (container[i].id === item.id) {
      return true;
    }
  }
  return false;
}

export function listElementsOfItem(action,eId){

    switch (action) {
      case "class":
        showClassListOfElement(eId);
        break;
      case "teacher":
        showTeacherListOfElement(eId);
        break;
        case "student":
        showStudentListOfElement(eId);
        break;
    }
}