import { generateTableElement } from "../../generate-listing-table/generate.table.row.js";

export function classListModalFragment(name,list){
const classListModal = document.createElement("div");

  classListModal.innerHTML = `
   <div class="modal-header bg-danger">
     <h5 class="modal-title text-white">Class List of ${name}</h5>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body">
   <table class="table">
   <thead>
     <tr>
       <th scope="col">#</th>
       <th scope="col">Class Name</th>
       <th scope="col"></th>
       <th scope="col"></th>
     </tr>
   </thead>
   <tbody>
   ${generateTableElement(list).innerHTML}
   </tbody>
 </table>
         
    
   </div>
   <div class="modal-footer">
     <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
       Close
     </button>
     <button data-action ="class" type="button" class="btn btn-outline-success saveChanges"data-bs-dismiss="modal">
       Save changes
     </button>
   </div>
 `;
 return classListModal;
}

