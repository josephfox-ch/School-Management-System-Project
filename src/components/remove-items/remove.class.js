import { LMSchool } from "../school/school.js"; 
import { updateLMSchool } from "../../utils.js";

export function removeClass(classId) {
  LMSchool.classes = LMSchool.classes.filter(
    (classItem) => classItem.id !== classId
  );

  LMSchool.teachers.forEach((teacher) => {
    teacher.classes = teacher.classes.filter(
      (classItem) => classItem.classId !== classId
    );
  });

  LMSchool.students.forEach((student) => {
    student.classes = student.classes.filter(
      (classItem) => classItem.classId !== classId
    );
  });
  updateLMSchool();
}
