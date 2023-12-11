import { addNewStudentModal } from "../templates-modal/add.student.modal.js";

export const editStudentModal = addNewStudentModal.cloneNode(true);

editStudentModal.querySelector(".modal-title").textContent = "Edit Student";