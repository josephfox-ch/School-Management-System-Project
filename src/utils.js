import { saveNewClassData } from "./service/components/save.class.data.js";
import { saveNewTeacherData } from "./service/components/save.teacher.data.js";
import { saveNewStudentData } from "./service/components/save.student.data.js";
import {
  editClass,
  editStudent,
  editTeacher,
  removeClass,
  removeStudent,
  removeTeacher,
} from "./functions.js";
import { LMSchool } from "./service/components/school.data.js";

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function findLengthOf(arr) {
  return arr ? arr.length : 0;
}

export function capitalizeInitials(str){
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


export function saveDataToLocalStorage(dataType) {
  switch (dataType) {
    case "class":
      saveNewClassData();
      break;
    case "teacher":
      saveNewTeacherData();
      break;
    case "student":
      saveNewStudentData();
      break;
  }
}

export function editItem(action, itemId) {
  switch (action) {
    case "class":
      editClass(itemId);
      break;
    case "teacher":
      editTeacher(itemId);
      break;
    case "student":
      editStudent(itemId);
      break;
  }
}

export function removeItem(action, itemId) {
  switch (action) {
    case "class":
      removeClass(itemId);
      console.log(action, itemId);
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
