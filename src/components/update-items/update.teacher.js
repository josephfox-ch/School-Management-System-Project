import { updateLocalStorage } from "../localStorage/local.storage.js";
import { capitalizeInitials } from "../../utils.js";
import { findClassByName } from "../class/class.utils.js";
import { getValuesOfTeacherForm, findTeacherById } from "../teacher/teacher.utils.js";

export function updateTeacher(teacherId) {
  const editedTeacher = findTeacherById(teacherId);
  const formValues = getValuesOfTeacherForm();

  editedTeacher.id = teacherId;
  editedTeacher.teacherName = capitalizeInitials(formValues.teacherName);
  editedTeacher.expertise = capitalizeInitials(formValues.expertise);

  let selectedClass = formValues.classSelectValue;
  let classItem = findClassByName(selectedClass);

  if (!formValues.expertise) {
    editedTeacher.expertise = "Expertise Info Not Available!";
  }

  if (formValues.teacherData !== "") {
    editedTeacher.data = formValues.teacherData;
  }

  if (formValues.classCheckbox) {
    if (
      !editedTeacher.classes.some(
        (existingClass) => existingClass.classId === classItem.id
      )
    ) {
      editedTeacher.classes.push({
        classId: classItem.id,
        className: classItem.className,
      });
      classItem.teachers.push(editedTeacher);
    } else {
      for (const existingClass of editedTeacher.classes) {
        if (existingClass.classId === classItem.id) {
          existingClass.className = classItem.className;
        }
      }
      const index = classItem.teachers.findIndex(
        (existingTeacher) => existingTeacher.id === editedTeacher.id
      );
      if (index !== -1) {
        classItem.teachers[index] = editedTeacher;
      }
    }
  } else {
    if (
      editedTeacher.classes.some(
        (existingClass) => existingClass.classId === classItem.id
      )
    ) {
      editedTeacher.classes = editedTeacher.classes.filter(
        (existingClass) => existingClass.classId !== classItem.id
      );
      classItem.teachers = classItem.teachers.filter(
        (existingTeacher) => existingTeacher.id !== editedTeacher.id
      );
    }
  }

  updateLocalStorage(classItem, "classes");
  updateLocalStorage(editedTeacher, "teachers");
}










