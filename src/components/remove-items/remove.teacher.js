import { LMSchool } from "../school/school.js"; 
import { updateLMSchool } from "../../utils.js";

export function removeTeacher(teacherId) {
  LMSchool.teachers = LMSchool.teachers.filter(
    (teacher) => teacher.id !== teacherId
  );

  LMSchool.classes.forEach((cls) => {
    cls.teachers = cls.teachers.filter((teacher) => teacher.Id !== teacherId);
  });

  updateLMSchool();
}
