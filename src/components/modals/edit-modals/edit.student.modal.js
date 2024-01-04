import { addNewStudentModal } from "../add-modals/add.student.modal.js";

export const editStudentModal = addNewStudentModal.cloneNode(true);

editStudentModal.querySelector(".modal-title").textContent = "Edit Student";
