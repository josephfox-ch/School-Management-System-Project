import { Student } from "../student/student.js";
import { findClassByName } from "../class/class.utils.js";
import { updateLocalStorage } from "../localStorage/local.storage.js";
import { capitalizeInitials, generateUniqueId } from "../../utils.js";

export function saveNewStudent() {
  try {
    const classCheckbox = document.getElementById("classSelectCheckbox");
    const classSelectOptions = document.querySelector("#classSelectForm");
    const studentInput = document.querySelector("#studentNameInput");
    const studentDataInput = document.querySelector("#studentDataTextArea");
    const assignmentInput = document.querySelector("#assignmentInput");
    const gradeInput = document.querySelector("#gradeInput");

    let newStudent = new Student();

    let assignmentData = capitalizeInitials(assignmentInput.value);
    let gradeData = gradeInput.value;

    newStudent.id = generateUniqueId();

    newStudent.studentName = capitalizeInitials(studentInput.value);
    if (studentDataInput.value !== "") {
      newStudent.data = studentDataInput.value;
    }

    if (assignmentData && gradeData) {
      newStudent.addGrades(assignmentData, gradeData);
    }

    if (classCheckbox.checked) {
      let selectedClass = classSelectOptions.value;
      let classItem = findClassByName(selectedClass);
      newStudent.classes.push({
        classId: classItem.id,
        className: classItem.className,
      });
      classItem.students.push(newStudent);
      updateLocalStorage(classItem, "classes");
    }

    const STUDENTS = "students";

    updateLocalStorage(newStudent, STUDENTS);
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
