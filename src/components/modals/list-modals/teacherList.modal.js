import { generateTableElement } from "../../generate-listing-table/generate.table.row.js";

export function teacherListModalFragment(name, list) {
  const teacherListModal = document.createElement("div");

  teacherListModal.innerHTML = `
    <div class="modal-header bg-warning">
      <h5 class="modal-title text-white ">Teacher List of Class ${name}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Teacher Name</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        ${generateTableElement(list).innerHTML}
      </table>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
        Close
      </button>
      <button data-action="class" type="button" class="btn btn-outline-success saveChanges" data-bs-dismiss="modal">
        Save changes
      </button>
    </div>
  `;

  return teacherListModal;
}