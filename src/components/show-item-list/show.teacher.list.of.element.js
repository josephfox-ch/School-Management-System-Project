import { generateModalFragment } from "../modals/modal.js"
import { showAddingModal } from "../../utils.js"
import { teacherListModalFragment } from "../modals/list-modals/teacherList.modal.js"
import { findClassById } from "../class/class.utils.js"

export function showTeacherListOfElement(eId){
    const cls = findClassById(eId);
    const classTeacherList = cls.teachers.map(teacher => teacher.teacherName);
    console.log(classTeacherList)
    const className = cls.className;
    generateModalFragment(teacherListModalFragment(className,classTeacherList))
    showAddingModal()

 
}