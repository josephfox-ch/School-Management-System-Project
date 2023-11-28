import {addNewClass} from "./components/add.Class.Modal.js";
import {addNewStudent} from "./components/add.Student.Modal.js";
import {addNewTeacher} from "./components/add.Teacher.Modal.js";




export function modalFragment(objectModal) {
  const modal = document.createElement("section");
  modal.innerHTML = `
    <div class="modal" tabindex="-1">
    <div class="modal-dialog">
    <div class="modal-content">
${objectModal.innerHTML}
    </div>
    </div>
    </div>
    `;
  return modal;
}


