import {
  Class,
  generateUniqueId,
  findTeacherByName,
  updateLocalStorage,
} from "../../functions.js";

export function saveNewClassData() {
  try {
    const teacherCheckbox = document.getElementById("teacherCheckbox");
    const teacherSelectOptions = document.getElementById("teachersSelectForm");
    const classNameInput = document.getElementById("classNameInput");
    const classDataInput = document.getElementById("classDataTextArea");

    let newClass = new Class();

    
    
    if (teacherCheckbox.checked) {
      let selectedTeacher = teacherSelectOptions.value;
      let teacher = findTeacherByName(selectedTeacher);
      newClass.teachers.push(teacher);
    }else{
      
    }

    newClass.id = generateUniqueId();
    newClass.className = classNameInput.value;

    if (classDataInput.value !== "") {
      newClass.data = classDataInput.value;
    }

    const CLASSES = "classes";
    updateLocalStorage(newClass, CLASSES);
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
