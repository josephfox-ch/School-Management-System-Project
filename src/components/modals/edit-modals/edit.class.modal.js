import { addNewClassModal } from "../add-modals/add.class.modal.js";

export const editClassModal = addNewClassModal.cloneNode(true);

editClassModal.querySelector(".modal-title").textContent = "Edit Class";
