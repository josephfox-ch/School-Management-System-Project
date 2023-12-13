import { generateModalFragment } from "../modals/modal.js"
import { showAddingModal } from "../../utils.js"
import { classListModalFragment } from "../modals/list-modals/classList.modal.js"
import { findTeacherById } from "../teacher/teacher.utils.js"

export function showClassListOfElement(eId){
const teacher = findTeacherById(eId);
const teacherClassList = teacher.classes.map(element =>element.className)
const teacherName = teacher.teacherName;
console.log(teacherClassList)
generateModalFragment(classListModalFragment(teacherName,teacherClassList))
showAddingModal()

console.log("show teacher of element",eId)
}