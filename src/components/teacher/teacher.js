import { CARD_DATA } from "../../service/data.js";

export class Teacher {
  constructor(teacherName, expertise) {
    this.id = "";
    this.teacherName = teacherName;
    this.expertise = expertise;
    this.classes = [];
    this.data = CARD_DATA;
  }
}
