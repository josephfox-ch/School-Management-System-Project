import { createOptionsFromClasses } from "../../../functions.js";

export const addNewTeacherModal = document.createElement("div");

addNewTeacherModal.innerHTML = `
  <div class="modal-header bg-warning">
    <h5 class="modal-title">Add New Teacher</h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body">
    <div class="form-check">
      <label class="form-check-label" for="flexRadioDefault">
        <select
          id="classSelectForm"
          class="form-select form-select-sm mb-2 bg-danger text-white fw-bold"
          aria-label="Small select example"
        >
          ${createOptionsFromClasses().innerHTML}
        </select>
      </label>
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text bg-warning fw-bold" id="inputGroup-sizing-sm">Teacher</span>
        <input id="teacherNameInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>
      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text fw-bold" id="inputGroup-sizing-sm">Expertise</span>
        <input id="expertiseInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>
      <div class="mb-3">
        <label for="teacherDataTextArea" class="form-label">Instructor Data</label>
        <textarea class="form-control" id="teacherDataTextArea" rows="3"></textarea>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
      Close
    </button>
    <button id="saveNewTeacher" type="button" class="btn btn-outline-success saveChanges" data-bs-dismiss="modal">
      Save changes
    </button>
  </div>`;
