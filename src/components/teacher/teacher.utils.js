import { teachers } from "../../service/data.js";

export function findTeacherByName(teacherName) {
  const foundTeacher = teachers.find(
    (teacher) => teacher.teacherName === teacherName
  );
  return foundTeacher || null;
}

export function createOptionsFromTeachers() {
  const selectElement = document.createElement("div");
  if (teachers.length != 0) {
    teachers.forEach((teacher) => {
      const optionElement = document.createElement("option");
      optionElement.value = teacher.teacherName;
      optionElement.textContent = teacher.teacherName;
      selectElement.appendChild(optionElement);
    });
  }

  return selectElement;
}
