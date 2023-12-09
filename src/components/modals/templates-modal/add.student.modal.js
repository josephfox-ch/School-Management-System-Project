export const addNewStudent = document.createElement("div");

addNewStudent.innerHTML = `
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
            class="form-select form-select-sm mb-2"
            aria-label="Small select example"
          >
            <option selected>Select Class</option>
            <option value="1">FullStack</option>
            <option value="2">AWS/Cloud Engineering</option>
            <option value="3">Software Testing</option>
          </select>
        </label>
        <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Student </span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Student Data</label>
   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
      </div>
      
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
        Close
      </button>
      <button type="button" class="btn btn-outline-success">
        Save changes
      </button>
    </div>
 

`;
