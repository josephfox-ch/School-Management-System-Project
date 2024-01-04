import { LMSchool } from "../school/school.js"; 
import { updateLMSchool } from "../../utils.js";

export function removeStudent(studentId) {
  LMSchool.students = LMSchool.students.filter(
    (student) => student.id !== studentId
  );

  updateLMSchool();
}
