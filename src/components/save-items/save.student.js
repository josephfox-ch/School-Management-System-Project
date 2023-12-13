import { Student } from "../student/student.js";
import { findClassByName } from "../class/class.utils.js";
import { updateLocalStorage } from "../localStorage/local.storage.js";
import { capitalizeInitials, generateUniqueId } from "../../utils.js";
import { students } from "../../service/data.js";

export function saveNewStudent(itemId) {
  console.log("studentIemID",itemId)
  try {
    const classCheckbox = document.getElementById("classSelectCheckbox");
    const classSelectOptions = document.querySelector("#classSelectForm");
    const studentInput = document.querySelector("#studentNameInput");
    const studentDataInput = document.querySelector("#studentDataTextArea");
    const assignmentInput1 = document.querySelector("#assignmentInput1");
    const gradeInput1 = document.querySelector("#gradeInput1");
    const assignmentInput2 = document.querySelector("#assignmentInput2");
    const gradeInput2 = document.querySelector("#gradeInput2");
    const assignmentInput3 = document.querySelector("#assignmentInput3");
    const gradeInput3 = document.querySelector("#gradeInput3");

    let newStudent = new Student();

    let assignment1 = capitalizeInitials(assignmentInput1.value);
    let grade1 = gradeInput1.value;

    let assignment2 = capitalizeInitials(assignmentInput2.value);
    let grade2 = gradeInput2.value;

    let assignment3 = capitalizeInitials(assignmentInput3.value);
    let grade3 = gradeInput3.value;



    newStudent.id = generateUniqueId();

    newStudent.studentName = capitalizeInitials(studentInput.value);
    if (studentDataInput.value !== "") {
      newStudent.data = studentDataInput.value;
    }

    if (assignment1 && grade1 ||assignment2 && grade2 ||assignment3 && grade3 ) {
      newStudent.addGrades(assignment1, grade1);
      newStudent.addGrades(assignment2, grade2);
      newStudent.addGrades(assignment3, grade3);
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
    console.log(Object.values(newStudent.grades))
    updateLocalStorage(newStudent, STUDENTS);
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
