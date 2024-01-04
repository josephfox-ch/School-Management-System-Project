import { CARD_DATA } from "../../service/data.js";

export class Student {
  constructor(studentName) {
    this.id = "";
    this.studentName = studentName;
    this.classes = [];
    this.grades = {};
    this.data = CARD_DATA;
  }
  addGrades(assignment, grade) {
    this.grades[assignment] = grade;
  }
}
