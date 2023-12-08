import {
  Student,
  updateLocalStorage,
  generateUniqueId,
  findClassByName,
} from "../../functions.js";

export function saveNewStudentData() {
  console.log("checkpoint-student");
  try {
    const classCheckbox = document.getElementById("classSelectCheckbox");
    const classSelectOptions = document.querySelector("#classSelectForm");
    const studentInput = document.querySelector("#studentNameInput");
    const studentDataInput = document.querySelector("#studentDataTextArea");
    const assignmentInput = document.querySelector("#assignmentInput");
    const gradeInput = document.querySelector("#gradeInput");

    let newStudent = new Student();

    let selectedClass = classSelectOptions.value;
    let classItem = findClassByName(selectedClass);

    let assignmentData = assignmentInput.value;
    let gradeData = gradeInput.value;

    newStudent.id = generateUniqueId();

    newStudent.studentName = studentInput.value;
    if (studentDataInput.value !== "") {
      newStudent.data = studentDataInput.value;
    }

    if (assignmentData && gradeData) {
      newStudent.addGrades(assignmentData, gradeData);
    }

    if (classCheckbox.checked) {
      newStudent.classes.push({
        classId: classItem.id,
        className: classItem.className,
      });
      classItem.students.push(newStudent);
      updateLocalStorage(classItem, "classes");
    }

    console.log(selectedClass, studentInput, studentDataInput);

    const STUDENTS = "students";

    updateLocalStorage(newStudent, STUDENTS);
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
