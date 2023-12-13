import { Student } from "../student/student.js";
import { findClassByName } from "../class/class.utils.js";
import { updateLocalStorage } from "../localStorage/local.storage.js";
import { capitalizeInitials, generateUniqueId } from "../../utils.js";
import { getValuesOfStudentForm } from "../student/student.utils.js";

export function saveNewStudent(itemId) {
  try {
    if (itemId) {
      updateStudent(itemId);
    } else {
      const STUDENTS = "students";
      const formValues = getValuesOfStudentForm();

      let newStudent = new Student();
      newStudent.id = generateUniqueId();
      newStudent.studentName = capitalizeInitials(formValues.studentName);

      if (formValues.studentData !== "") {
        newStudent.data = formValues.studentData;
      }

      if (
        (formValues.assignment1 && formValues.grade1) ||
        (formValues.assignment2 && formValues.grade2) ||
        (formValues.assignment3 && formValues.grade3)
      ) {
        newStudent.addGrades(formValues.assignment1, formValues.grade1);
        newStudent.addGrades(formValues.assignment2, formValues.grade2);
        newStudent.addGrades(formValues.assignment3, formValues.grade3);
      }

      if (formValues.classCheckbox) {
        let selectedClass = formValues.classSelectValue;
        let classItem = findClassByName(selectedClass);
        newStudent.classes.push({
          classId: classItem.id,
          className: classItem.className,
        });
        classItem.students.push(newStudent);
        updateLocalStorage(classItem, "classes");
      }
      updateLocalStorage(newStudent, STUDENTS);
    }
  } catch (error) {
    console.error("error while saving data:", error);
  }
}
