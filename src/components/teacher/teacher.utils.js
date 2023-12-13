import { teachers } from "../../service/data.js";

export function findTeacherByName(teacherName) {
  const foundTeacher = teachers.find(
    (teacher) => teacher.teacherName === teacherName
  );
  return foundTeacher || null;
}

export function findTeacherById(teacherId) {
  const foundTeacher = teachers.find((teacher) => teacher.id === teacherId);
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

export function getValuesOfTeacherForm() {
  const classCheckbox = document.getElementById("classSelectCheckbox");
  const classSelectOptions = document.querySelector("#classSelectForm");
  const teacherNameInput = document.querySelector("#teacherNameInput");
  const expertiseInput = document.getElementById("expertiseInput");
  const teacherDataInput = document.getElementById("teacherDataTextArea");

  const values = {
    classCheckbox: classCheckbox.checked,
    classSelectValue: classSelectOptions.value,
    teacherName: teacherNameInput.value,
    teacherData: teacherDataInput.value,
    expertise: expertiseInput.value,
  };

  return values;
}
