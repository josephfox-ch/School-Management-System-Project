import { createOptionsFromClasses } from "../../class/class.utils.js";

export const addNewStudentModal = document.createElement("div");

addNewStudentModal.innerHTML = `
  <div class="modal-header bg-info">
    <h5 class="modal-title">Add New Student</h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body">
    <form id="addNewStudentForm">
      <div class="form-check">
      <input class="form-check-input bg-danger" type="checkbox"  value="" id="classSelectCheckbox">
      <label class="form-check-label" for="classSelectCheckbox">
        <select
          id="classSelectForm"
          class="form-select form-select-sm mb-2 bg-danger text-white fw-bold"
          aria-label="Small select example"
        >
          ${createOptionsFromClasses().innerHTML}
        </select>
      </label>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text bg-info fw-bold" id="inputGroup-sizing-sm">Student</span>
          <input id="studentNameInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="mb-3">
          <label for="studentDataTextAea" class="form-label">Student Data</label>
          <textarea class="form-control" id="studentDataTextArea" rows="3"></textarea>
        </div>
        <div class="row">
          <div class="col-sm-9">
            <label for="assignment1Input" class="form-label input-sm">Assignment</label>
            <input type="text" class="form-control input-sm grades-input" id="assignment1Input">
          </div>
          <div class="col-sm-3 ms-auto">
            <label for="grade1Input" class="form-label input-sm">Grade</label>
            <input type="text" class="form-control input-sm grades-input" id="grade1Input">
          </div>
        </div>
        <div class="row">
        <div class="col-sm-9">
          <label for="assignment2Input" class="form-label input-sm">Assignment</label>
          <input type="text" class="form-control input-sm grades-input" id="assignment2Input">
        </div>
        <div class="col-sm-3 ms-auto">
          <label for="grade2Input" class="form-label input-sm">Grade</label>
          <input type="text" class="form-control input-sm grades-input" id="grade2Input">
        </div>
      </div>
      <div class="row">
      <div class="col-sm-9">
        <label for="assignment3Input" class="form-label input-sm">Assignment</label>
        <input type="text" class="form-control input-sm grades-input" id="assignment3Input">
      </div>
      <div class="col-sm-3 ms-auto">
        <label for="grade3Input" class="form-label input-sm">Grade</label>
        <input type="text" class="form-control input-sm grades-input" id="grade3Input">
      </div>
    </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
    <button data-action ="student" type="button" class="btn btn-outline-success saveChanges" data-bs-dismiss="modal">Save changes</button>
  </div>
`;
