export const addNewClass = document.createElement("div");

addNewClass.innerHTML = `
  <div class="modal-header">
    <h5 class="modal-title">Add New Class</h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
        <select
          class="form-select form-select-sm"
          aria-label="Small select example"
        >
          <option selected>Select Class</option>
          <option value="1">FullStack</option>
          <option value="2">AWS/Cloud Engineering</option>
          <option value="3">Software Testing</option>
        </select>
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm"> Add New Class</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
      </label>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
      Close
    </button>
    <button type="button" class="btn btn-primary">
      Save changes
    </button>
  </div>
`;
