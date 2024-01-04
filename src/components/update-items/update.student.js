import {
  findStudentById,
  getValuesOfStudentForm,
} from "../student/student.utils.js";
import { findClassById, findClassByName } from "../class/class.utils.js";
import { updateLocalStorage } from "../localStorage/local.storage.js";

export function updateStudent(studentId) {
  const editedStudent = findStudentById(studentId);
  const formValues = getValuesOfStudentForm();

  editedStudent.studentName = formValues.studentName;
  editedStudent.data = formValues.studentData;
  const selectedClass = formValues.classSelectValue;
  const classItem = findClassByName(selectedClass);
  
  if (formValues.assignment1 && formValues.grade1) {
    editedStudent.grades[formValues.assignment1] = formValues.grade1;
  }
  if (formValues.assignment2 && formValues.grade2) {
    editedStudent.grades[formValues.assignment2] = formValues.grade2;
  }
  if (formValues.assignment3 && formValues.grade3) {
    editedStudent.grades[formValues.assignment3] = formValues.grade3;
  }

  if (formValues.classCheckbox) {
    if (
      !classItem.students.some((student) => student.id === editedStudent.id)
    ) {
      classItem.students.push(editedStudent);
      editedStudent.classes.push({
        classId: classItem.id,
        className: classItem.className,
      });
    } else {
      const index = classItem.students.findIndex(
        (existingStudent) => existingStudent.id === editedStudent.id
      );
      if (index !== -1) {
        classItem.students[index] = editedStudent;
      }
    }
    updateLocalStorage(classItem, "classes");
  } else {
    if (
      editedStudent.classes.some(
        (existingClass) => existingClass.classId === classItem.id
      )
    ) {
      editedStudent.classes = editedStudent.classes.filter(
        (existingClass) => existingClass.classId !== classItem.id
      );
      classItem.students = classItem.students.filter(
        (existingStudent) => existingStudent.id !== editedStudent.id
      );
    }
    updateLocalStorage(classItem, "classes");
  }

  updateLocalStorage(editedStudent, "students");
}
