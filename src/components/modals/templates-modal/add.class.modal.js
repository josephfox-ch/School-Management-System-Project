export const addNewClassModal = document.createElement("div");

addNewClassModal.innerHTML = `
  <div class="modal-header">
    <h5 class="modal-title">Add New Class</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text bg-danger text-white" id="inputGroup-sizing-sm">Add New Class</span>
      <input id="classNameInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
   
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text bg-warning text-white" id="inputGroup-sizing-sm">Teacher</span>
      <input id="teacherNameInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>

    <div class="mb-3">
      <label for="classDataTextArea" class="form-label">Class Data</label>
      <textarea class="form-control" id="classDataTextArea" rows="3"></textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
    <button id="saveNewClass" type="button" class="btn btn-outline-success saveChanges" data-bs-dismiss="modal">Save changes</button>
  </div>
`;

