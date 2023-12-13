import { Student } from "../student/student.js";
import { findClassByName } from "../class/class.utils.js";
import { updateLocalStorage } from "../localStorage/local.storage.js";
import { capitalizeInitials, generateUniqueId } from "../../utils.js";
import { students } from "../../service/data.js";
import { getValuesOfStudentForm } from "../student/student.utils.js";

export function saveNewStudent(itemId) {
  console.log("studentIemID",itemId)
  try {
    const formValues = getValuesOfStudentForm()

    let newStudent = new Student();

    newStudent.id = generateUniqueId();

    newStudent.studentName = capitalizeInitials(studentNameInput.value);
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
