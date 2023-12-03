import { LMSchool } from "./components/school.data.js";

export const classes = LMSchool.classes;
console.log("classes", classes);

export const teachers = classes.map((classEl) => {
  const teacher = classEl.teacher;

  if (teacher) {
    return teacher;
  }

  return [];
});

console.log("teachers", teachers);

export const students = [
  {
    name: "Joseph FOX",
    class: "FullStack",
    data: "This is the students data  template for  checkpoint project.",
    grades: [99, 90, 95, 89, 100],
  },
  {
    name: "Joseph FOX",
    class: "FullStack",
    data: "This is the students data  template for  checkpoint project.",
    grades: [99, 90, 95, 89, 100],
  },
  {
    name: "Joseph FOX",
    class: "FullStack",
    data: "This is the students data  template for  checkpoint project.",
    grades: [99, 90, 95, 89, 100],
  },
];
