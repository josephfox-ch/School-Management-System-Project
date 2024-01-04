import { generateModalFragment } from "../modals/modal.js";
import { showAddingModal } from "../../utils.js";
import { studentListModalFragment } from "../modals/list-modals/studentList.modal.js";
import { findClassById } from "../class/class.utils.js";
import { findTeacherById } from "../teacher/teacher.utils.js";

export function showStudentListOfElement(eId) {
  if (findClassById(eId)) {
    const cls = findClassById(eId);
    const classStudentList = cls.students.map((student) => student.studentName);
    console.log(classStudentList);
    const className = cls.className + " Class";
    generateModalFragment(
      studentListModalFragment(className, classStudentList)
    );
  } else {
    const teacher = findTeacherById(eId);
    const teacherName = "Teacher " + teacher.teacherName;
    const classListOfTeacher = teacher.classes;
    const studentList = [];

    classListOfTeacher.forEach((classItem) => {
      const clsId = classItem.classId;
      const foundClass = findClassById(clsId);

      const classStudents = foundClass.students;
      classStudents.forEach((student) => {
        studentList.push(student.studentName);
      });
    });
    generateModalFragment(studentListModalFragment(teacherName, studentList));
  }

  showAddingModal();
}
