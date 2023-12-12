import { classes } from "../../service/data.js";

export function findClassByName(className) {
  const foundClass = classes.find((cls) => cls.className === className);
  return foundClass || null;
}

export function findClassById(classId) {
  const foundClass = classes.find((cls) => cls.id === classId);
  return foundClass || null;
}

export function createOptionsFromClasses() {
  const selectElement = document.createElement("div");
  if (classes.length != 0) {
    classes.forEach((classItem) => {
      const optionElement = document.createElement("option");
      optionElement.value = classItem.className;
      optionElement.textContent = classItem.className;
      selectElement.appendChild(optionElement);
    });
  }

  return selectElement;
}
