import { CARD_DATA } from "../../service/data.js";

export class Class {
  constructor(className) {
    this.id = "";
    this.className = className;
    this.teachers = [];
    this.students = [];
    this.data = CARD_DATA;
  }

  addStudent(newStudent) {
    this.students.push(newStudent);
  }
}
