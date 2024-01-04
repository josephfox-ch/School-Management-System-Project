import { findClassById, getValuesOfClassForm } from "../class/class.utils.js";
import { updateLocalStorage } from "../localStorage/local.storage.js";
import { findTeacherByName } from "../teacher/teacher.utils.js";
import { capitalizeInitials } from "../../utils.js";

export function updateClass(classId) {
  const editedClass = findClassById(classId);
  const formValues = getValuesOfClassForm();

  editedClass.id = classId;
  editedClass.className = capitalizeInitials(formValues.className);
  editedClass.data = formValues.classData;

  let selectedTeacher = formValues.teacherSelectValue;
  let teacher = findTeacherByName(selectedTeacher);

  if (formValues.teacherCheckbox) {
    if (
      !editedClass.teachers.some(
        (existingTeacher) => existingTeacher.id === teacher.id
      )
    ) {
      teacher.classes.push({
        classId: editedClass.id,
        className: editedClass.className,
      });
      editedClass.teachers.push(teacher);
    } else {
      for (const cls of teacher.classes) {
        if (cls.classId === editedClass.id) {
          (cls.classId = editedClass.id),
            (cls.className = editedClass.className);
        }
      }
    }
  } else {
    if (
      editedClass.teachers.some(
        (existingTeacher) => existingTeacher.id === teacher.id
      )
    ) {
      editedClass.teachers = editedClass.teachers.filter(
        (existingTeacher) => existingTeacher.id !== teacher.id
      );
      teacher.classes = teacher.classes.filter(
        (classItem) => classItem.classId !== editedClass.id
      );
    }
  }
  updateLocalStorage(teacher, "teachers");

  updateLocalStorage(editedClass, "classes");
}
