import { addNewClassModal } from "../templates-modal/add.class.modal.js";

export const editClassModal = addNewClassModal.cloneNode(true);

editClassModal.querySelector(".modal-title").textContent = "Edit Class";
