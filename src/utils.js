import { saveNewClassData } from "./service/components/save.class.data.js";
import { saveNewTeacherData } from "./service/components/save.teacher.data.js";
import { saveNewStudentData } from "./service/components/save.student.data.js";

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function findLengthOf(arr) {
  return arr ? arr.length : 0;
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
