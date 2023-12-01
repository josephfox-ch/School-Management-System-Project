export const addNewTeacher = document.createElement("div");

addNewTeacher.innerHTML = `
    <div class="modal-header">
      <h5 class="modal-title">Add New Teacher</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
     <div class="input-group input-group-sm mb-3">
            <span class="input-group-text bg-warning text-white" id="inputGroup-sizing-sm">Instructor</span>
            <input id="teacherNameInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
     </div>
     <div class="input-group input-group-sm mb-3">
     <span class="input-group-text fw-bold" id="inputGroup-sizing-sm">Expertise</span>
     <input id="expertiseInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
 </div>
    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Instructor Data</label>
  <textarea id="teacherDataTextArea"class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
        Close
      </button>
      <button id="saveNewTeacher" type="button" class="btn btn-outline-success saveChanges" data-bs-dismiss="modal">
        Save changes
      </button>
    </div>
 

`;
