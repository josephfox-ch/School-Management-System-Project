import { generateTableElement } from "../../generate-listing-table/generate.table.row.js";

export function studentListModalFragment(name,list){
const studentListModal = document.createElement("div");

  
studentListModal.innerHTML = `
<div class="modal-header bg-info">
  <h5 class="modal-title text-white ">Student List of  ${name}</h5>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Student Name</th>
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
</div>
`;

 return studentListModal;
}

