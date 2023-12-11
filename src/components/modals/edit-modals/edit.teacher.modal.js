import { addNewTeacherModal } from "../templates-modal/add.teacher.modal.js";

export const editTeacherModal = addNewTeacherModal.cloneNode(true);

editTeacherModal.querySelector(".modal-title").textContent = "Edit Teacher";