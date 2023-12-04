import { createOptionsFromClasses } from "./student.class.option.js";

export const addNewStudentModal = document.createElement("div");

addNewStudentModal.innerHTML = `
    <div class="modal-header">
      <h5 class="modal-title">Add New Student</h5>
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
            id="studentSelectForm"
            class="form-select form-select-sm mb-2 bg-danger text-white"
            aria-label="Small select example"
          >
        ${createOptionsFromClasses().innerHTML}
          </select>
        </label>
        <div class="input-group input-group-sm mb-3">
        <span class="input-group-text bg-info text-white" id="inputGroup-sizing-sm">Student </span>
        <input id="studentNameInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class="mb-3">
    <label for="studentDataTextAea" 
    class="form-label">Student Data</label>
   <textarea class="form-control" id="studentDataTextArea" rows="3"></textarea>
    </div>
    <div class="row g-3">
  <div class="col-sm-3">
    <label for="inputGrade1" class="form-label">Grade-1</label>
    <input type="text" class="form-control" id="inputGrade1">
  </div>
  <div class="col-sm-3">
    <label for="inputGrade2" class="form-label">Grade-2</label>
    <input type="text" class="form-control" id="inputGrade2">
  </div>
  
  <div class="col-sm-3">
    <label for="inputGrade3" class="form-label">Grade-3</label>
    <input type="text" class="form-control" id="inputGrade3">
  </div>
  <div class="col-sm-3">
    <label for="inputGrade4" class="form-label">Grade-4</label>
    <input type="text" class="form-control" id="inputGrade43">
  </div>
</div>

   
  </div>

  </div>

      </div>
      
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
        Close
      </button>
      <button id="saveNewStudent" type="button" class="btn btn-outline-success saveChanges" data-bs-dismiss="modal">
        Save changes
      </button>
    </div>
 

`;
